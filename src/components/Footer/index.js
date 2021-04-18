import React from 'react'
import './styles.css'

import NavList from '../CustomComponents'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <menu>
                <ul>
                <NavList><Link to="/entrar-contato">Entre em contato</Link></NavList>
                <NavList><Link to="/produtos">Produtos</Link></NavList>
                <NavList><Link to="/carrinho">Carrinho</Link></NavList>
                <NavList><Link to="/">Início</Link></NavList>
                </ul>
            </menu>
        </>
    )}

export default Footer