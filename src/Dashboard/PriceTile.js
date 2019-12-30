import React from 'react'
import styled, { css } from 'styled-components';
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig, blueBoxShadow } from "../Shared/Styles";
import { AppContext } from '../components/AppProvider'




const JustifyRight = styled.div`
  justify-self: right; 
`

const JustifyLeft = styled.div`
  justify-self: left; 
`

const TickerPrice = styled.div`
  ${fontSizeBig};
`

const ChangePct = styled.div`
  color: green; 
  ${props => props.red && css`
    color: red; 
  `}
`
const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    ${fontSize3}
  `}
  
  ${props => props.currentFavorite && css`
    ${blueBoxShadow}
    pointer-events: none; 
  `}
`

function ChangePercent({ data }) {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}%
      </ChangePct>
    </JustifyRight>
  );
}

const numberFormat = number => {
  return +(number + '').slice(0, 7)
}
function PriceTile({ sym, data, currentFavorite, setCurrentFavorite }) {
  return (
    <div className="col-6 col-md-3 p-2">
      <PriceTileStyled
        onClick={setCurrentFavorite}
        currentFavorite={currentFavorite}>
        <JustifyLeft> {sym} </JustifyLeft>
        <ChangePercent data={data} />
        <TickerPrice>
          ${numberFormat(data.PRICE)}
        </TickerPrice>
      </PriceTileStyled>
    </div>
  );
}
export default function ({ price, index }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]['CAD'];
  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) =>

        <PriceTile
          sym={sym}
          data={data}
          currentFavorite={currentFavorite === sym}
          setCurrentFavorite={() => setCurrentFavorite(sym)}
        >
        </PriceTile>
      }
    </AppContext.Consumer>
  )
}


