import React from 'react'
import { AppContext } from '../components/AppProvider';
import { Tile } from '../Shared/Tile';
import CoinImage from '../Shared/CoinImage';

const CoinSpotlight = () => {
    return (
        <AppContext.Consumer>

            {({ currentFavorite, coinList }) => (
                <Tile>
                    <div className="row justify-content-center chartrow">
                        {/* <div className="container"> */}
                        <div className="col">
                            <div className="row">
                                <div className="col-12 spotlight">
                                    <h2>{coinList[currentFavorite].CoinName}</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center" style={{ alignItems: 'center' }}>
                                <div className="col-12 spotlight">
                                    <CoinImage spotlight coin={coinList[currentFavorite]} />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* </div> */}
                </Tile>
            )}
        </AppContext.Consumer>
    )
}

export default CoinSpotlight
