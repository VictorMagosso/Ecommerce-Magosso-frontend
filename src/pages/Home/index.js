import React from 'react'
import PageDefault from '../PageDefault'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const DefaultDiv = styled.div `
    height: 100vh;
`

const Home = () => {
    return (
    <PageDefault>
        <DefaultDiv>
           <Link to="/"><img src={Logo} width="5%"/></Link>
        </DefaultDiv>
    </PageDefault>
    )}

export default Home