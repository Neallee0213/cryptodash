import React from 'react'
import styled, { css } from 'styled-components';


const ChangePct = styled.div`
  color: green; 
  ${props => props.red && css`
    color: red; 
  `}
`

function ChangePercent({ data }) {
    return (
        <div className="overview">
            <div className="row">
                <div className="col datas">
                    {data.FROMSYMBOL}
                </div>
            </div>
            <div className="row price-data">
                <div className="col-6 datas">
                    ${numberFormat(data.PRICE)}
                </div>
                <div className="col-6 datas">
                    <ChangePct red={data.CHANGEPCT24HOUR < 0}>
                        {numberFormat(data.CHANGEPCT24HOUR)}%
                    </ChangePct>
                </div>
            </div>
        </div>
    );
}
const numberFormat = number => {
    return +(number + '').slice(0, 6)
}
const Overview = ({ price }) => {
    let sym = Object.keys(price)[0];
    let data = price[sym]['CAD'];
    return (

        <div className="col-4 col-md-2" style={{ padding: '1rem' }}>
            <ChangePercent data={data} />
        </div>

    )
}

export default Overview
