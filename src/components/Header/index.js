import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavList from '../CustomComponents'
import './style.css'

const HeaderDiv = styled.menu`
    color: white;
    background-color: black;
`
const Header = () => {
    return (
    <HeaderDiv>
        <ul>
        <NavList><a href="#">(11) 948494948 <i className="fab fa-whatsapp"></i></a></NavList>
        <NavList className="last-item"><Link to="/entrar-contato">Entre em contato</Link></NavList>
        <NavList><Link to="/produtos">Produtos</Link></NavList>
        <NavList><Link to="/carrinho">Carrinho</Link></NavList>
        <NavList><Link to="/">Início</Link></NavList>
        </ul>
    </HeaderDiv>
    )}

export default Header