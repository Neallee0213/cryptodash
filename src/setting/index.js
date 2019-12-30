import React from 'react'
import ConfirmButton from './ConfirmButton'
import Welcome from './Welcome'
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'
import Search from './Search'


const Setting = () => {
    return (

        <Page name='settings'>
            <Welcome />
            <CoinGrid topSection />
            <ConfirmButton />
            <Search />
            <CoinGrid />
        </Page>
    )
}

export default Setting
