import React from 'react'
import PageDefault from '../PageDefault'
import Banner from '../../components/Banner'
import HighLight from '../../components/HighLights'
import VikingsBanner from '../../components/VikingsBanner'


const Home = () => {
    return (
    <PageDefault>
        <Banner/>
        <HighLight/>
        <VikingsBanner/>
    </PageDefault>
    )}

export default Home