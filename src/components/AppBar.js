import React from 'react'
import styled, { css } from 'styled-components'
import { AppContext } from './AppProvider'



const Logo = styled.div`
  font-size: 2.5em; 
  margin:auto;
`

const Bar = styled.div`
  display: grid; 
  margin-bottom: 40px; 
  grid-template-columns: 160px auto 90px 90px; 
`

const ControlButtonElem = styled.div`
  cursor: pointer; 
  margin:auto;
  font-size: 1.5em; 
  ${props => props.active && css`
    padding:.5rem 1rem;
    border-radius:10px
    background-color:var(--color-primary-light-1);
    color:white;
  `}
  ${props => props.hidden && css`
    display: none; 
  `}
`
const toUppercase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}
const ControlButton = ({ name }) => {
  return (
    <AppContext.Consumer>
      {({ firstVisit, page, setPage }) => (
        <ControlButtonElem
          active={page === name}
          onClick={() => setPage(name)}
          hidden={firstVisit && name === 'dashboard'}
        >
          {toUppercase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  )
}

const AppBar = () => {
  return (
    <Bar>
      <Logo> Crypto Dash </Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  )
}

export default AppBar
