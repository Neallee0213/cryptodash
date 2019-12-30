import React from 'react'
import { AppContext } from '../components/AppProvider'
import styled from 'styled-components'
import PriceTile from './PriceTile'


const PriceGrid = styled.div`
  margin-top: 20px;
`

export default function () {
    return (
        <AppContext.Consumer>
            {({ prices }) => (
                < PriceGrid >
                    <div className="container-fluid">
                        <div className="row justify-content-start">
                            {
                                prices.map((price, index) => (
                                    <PriceTile key={`price-${index}`} index={index} price={price} />
                                ))
                            }
                        </div>
                    </div>

                </PriceGrid>
            )
            }
        </AppContext.Consumer >
    );
}
