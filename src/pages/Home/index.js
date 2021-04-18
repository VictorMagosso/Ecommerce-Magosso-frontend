import React from 'react'
import PageDefault from '../PageDefault'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'

const DefaultDiv = styled.div `
    height: 100vh;
`

const Home = () => {
    return (
    <PageDefault>
        <DefaultDiv>
            <img src={Logo} width="10%"/>
        </DefaultDiv>
    </PageDefault>
    )}

export default Home