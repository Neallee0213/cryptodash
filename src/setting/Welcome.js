import React from 'react'
import { AppContext } from '../components/AppProvider'
const Welcome = ({ firstVisit }) => {
    return (
        <AppContext.Consumer>
            {({ firstVisit }) =>
                firstVisit ?
                    <div className="coin-text">
                        Welcome to CryptoDash, please select your favorrite coins to begin. {' '}
                    </div>
                    : <h1 className="coin-text"> Your Favorites Coins</h1>
            }
        </AppContext.Consumer>
    )
};

export default Welcome
