import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavList, { CategoryList, CategoryUl } from '../CustomComponents'
import './style.css'

const HeaderDiv = styled.menu`
    color: white;
    background-color: black;
`
const Header = () => {
    const [cartQtt, setCartQtt] = useState(0)
    return (
    <HeaderDiv>
        <ul>
        <NavList><a href="#">(11) 948494948 <i className="fab fa-whatsapp"></i></a></NavList>
        <NavList className="last-item"><Link to="/carrinho">Carrinho <i className="fas fa-shopping-cart"></i> {cartQtt}</Link></NavList>
        <NavList><Link to="/entrar-contato">Entre em contato</Link></NavList>
        <NavList><Link to="/produtos">Todos os produtos</Link></NavList>
        <NavList><Link to="/produtos-vikings">Especial Vikings</Link></NavList>
        <NavList id="category-item"><Link to="/">Categorias <i className="fas fa-chevron-down"></i></Link>
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