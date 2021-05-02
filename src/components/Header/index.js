import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Chariot, Logo } from '../../utils/images'
import NavList, { CategoryList, CategoryUl } from '../CustomComponents'

import './style.css'

const HeaderDiv = styled.menu`
    margin: 0 75px;
    color: white;
    background-color: transparent;
`
const Header = () => {
    const [cartQtt, setCartQtt] = useState(0)
    return (
    <HeaderDiv>
        <div className="logo-menu">
            <Link to="/home"><img width="70%" src={Logo}/></Link>
        </div>

        <div className="chairot-menu">
            <Link to="/carroca"><img width="35" src={Chariot}/></Link>
            <span className="qtt-chariot">{cartQtt}</span>
        </div>
        <ul>
        
        <NavList><Link to="/entrar-contato">CONTATO</Link></NavList>
        <NavList><a href="#custom">PERSONALIZAR</a></NavList>
        <NavList><Link to="/produtos-vikings">ESPECIAL VIKINGS</Link></NavList>
        <NavList id="category-item"><Link to="/">PRODUTOS</Link>
            <CategoryUl className="category-list">
                <CategoryList><Link to="/produtos-miniaturas"><i className="fas fa-chevron-right"></i> Miniaturas</Link></CategoryList>
                <CategoryList><Link to="/produtos-madeira"><i className="fas fa-chevron-right"></i> Produtos de madeira</Link></CategoryList>
                <CategoryList><Link to="/produtos-armas-brancas"><i className="fas fa-chevron-right"></i> Armas brancas</Link></CategoryList>
                <CategoryList><Link to="/produtos-culturais"><i className="fas fa-chevron-right"></i> Culturais</Link></CategoryList>
                <CategoryList><Link to="/produtos-colecionaveis"><i className="fas fa-chevron-right"></i> Colecionáveis</Link></CategoryList>
            </CategoryUl>
        </NavList>
        </ul>

    </HeaderDiv>
    )}

export default Header