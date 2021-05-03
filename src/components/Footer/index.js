import React from 'react'
import styled from 'styled-components'

import NavList from '../CustomComponents'
import { Link } from 'react-router-dom'

import './styles.css'
import { Logo } from '../../utils/images'

const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                <ul>
                    <li className="li-footer"><Link to="/entrar-contato">Produtos</Link></li>
                    <li className="li-footer"><Link to="/produtos">Especial Vikings</Link></li>
                    <li className="li-footer"><Link to="/carrinho">Personalizar</Link></li>
                    <li className="li-footer"><Link to="/">Contato</Link></li>
                </ul>
                <ul>
                    <li className="li-footer"><Link to="/entrar-contato">Saiba mais</Link></li>
                </ul>
            </div>
            <div className="social-media">
                <a href="#">(11) 97237-7935 <i className="fab fa-whatsapp"></i></a>
                <a href="#"><i className="fab fa-instagram"></i> @magoreplicas</a>
            </div>
            <div className="social-media">
                <img width="100" src={Logo}/>
            </div>
        </div>
    )}

export default Footer;