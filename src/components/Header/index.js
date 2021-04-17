import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavList = styled.li`
    list-style: none;
    display: inline;
    margin-left: 2em;
    float: right;
`

const Header = () => {
    return (
    <>
    <menu>
        <ul>
        <NavList><Link to="/entrar-contato">Entre em contato</Link></NavList>
        <NavList><Link to="/produtos">Produtos</Link></NavList>
        <NavList><Link to="/carrinho">Carrinho</Link></NavList>
        <NavList><Link to="/">Home</Link></NavList>
        </ul>
    </menu>
    </>
    )}

export default Header