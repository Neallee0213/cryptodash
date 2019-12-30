import React from 'react';
import { AppContext } from '../components/AppProvider'
import _ from 'lodash';
import fuzzy from 'fuzzy';
import Overview from './Overview'
import magnifyingGlass from '../imgs/PNG/magnifying-glass.png'


const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {

    let coinSymbols = Object.keys(coinList);
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
    let allStringsToSearch = coinSymbols.concat(coinNames);
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map(result => result.string);

    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.CoinName;
        return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
    });
    setFilterCoins(filteredCoins);
}, 100);

function filterCoins(e, setFilteredCoins, coinList) {
    let inputValue = e.target.value;
    if (!inputValue) {
        setFilteredCoins(null);
        return;
    }
    handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function () {
    return (

        <AppContext.Consumer>
            {({ setFilteredCoins, coinList, prices }) =>
                <div className="search-area">

                    <div className="row overview-text justify-content-center">
                        <h2>Selected Overview</h2>
                    </div>
                    <div className="row overview-data justify-content-center">
                        {prices.map(price => <Overview price={price} key={Math.random()} />)}
                    </div>

                    <form action="#" className="search">
                        <input type="text" className="search__input" search__input placeholder="Search all coins"
                            onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
                        />
                        <button className="search__button">
                            <img src={magnifyingGlass} alt="magnifying-glass" className="search__icon" />
                        </button>
                    </form>
                    <h1 className="coin-text">Select Coins</h1>
                </div>
            }
        </AppContext.Consumer >
    );
}
