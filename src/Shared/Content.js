import React from 'react'
import { AppContext } from '../components/AppProvider'



const Content = (props) => {
    return (

        <div className="content">
            <div className="hotel-view">
                <AppContext.Consumer>
                    {({ coinList, prices, firstVisit }) => {
                        if (!coinList) {
                            return <div className="loading"> Loading Coins... </div>
                        }
                        if (!firstVisit && !prices) {
                            return <div className="loading"> Loading Prices... </div>
                        }
                        return <div> {props.children} </div>
                    }}
                </AppContext.Consumer>
            </div>
        </div>
    )

}

export default Content
