import React from 'react'
import { AppContext } from '../components/AppProvider'
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile'
import CoinImage from '../Shared/CoinImage'
import styled from "styled-components";

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr .2fr;
  
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

export const DeleteIcon = styled.div`
  justify-self: right;
  display: none; 
  
  ${DeletableTile}:hover & {
    display:inline;
    color: red;
    font-size: 1.1rem;
    font-weight: 700;
  }
`;
function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
    return topSection ? () => {
        removeCoin(coinKey)
    } : () => {
        addCoin(coinKey)
    }
}

const CoinTile = ({ coinKey, topSection }) => {

    return (
        <AppContext.Consumer>
            {({ coinList, addCoin, removeCoin, isInFavorites, }) => {
                let coin = coinList[coinKey];
                let TileClass = SelectableTile;
                if (topSection) {
                    TileClass = DeletableTile;
                } else if (isInFavorites(coinKey)) {
                    TileClass = DisabledTile;
                }


                return (

                    <TileClass
                        onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
                    >
                        <CoinHeaderGridStyled>
                            < CoinImage coin={coin} />

                            {topSection ? (
                                <>
                                    <div> {coin.CoinName} </div>
                                    <DeleteIcon> X </DeleteIcon>
                                </>

                            ) : <div> {coin.CoinName} </div>}
                        </CoinHeaderGridStyled>
                    </TileClass>
                )

            }}
        </AppContext.Consumer>
    )
}

export default CoinTile
