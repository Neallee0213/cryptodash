import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../components/AppProvider'



export const CenterDiv = styled.div`
  display: grid;
  justify-content: center; 
  padding:5rem 0;
`;

export default function () {
  return <AppContext.Consumer>
    {({ confirmFavorites }) =>
      <CenterDiv>

        <button className="btn" onClick={confirmFavorites}>

          <span class="btn__visible">Confirm</span>
          <span class="btn__invisible">Analizing</span>

        </button>

      </CenterDiv>
    }
  </AppContext.Consumer>;
}
