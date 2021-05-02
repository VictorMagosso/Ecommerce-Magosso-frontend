import React from 'react';
import styled from 'styled-components';
import { AxePhoto, LineDecoration } from '../../utils/images';

import './style.css'

const Title = styled.p `
    display: inline;
    color: #373E4D;
    font-size: 64px;
`

const HighLight = () => {
    return (
        <div className="highlight-container">
            <div>
                <Title>Destaques</Title>
                <img src={LineDecoration}/>
            </div>
            <div className="flex-highlights">
                <div className="flex-highlights-item">
                <img width="265" className="product-img" src={AxePhoto}/>
                    <div className="card-flex-highlight">
                        <h3 className="product-title">Machado Vikings</h3>
                        <p className="product-description">Réplica do machado utilizado por Ragnar na série Vikings</p>
                        <div className="money-component">
                            <span>R$ </span><span className="product-price">
                                <b>89,90</b>
                            </span>
                        </div>
                        <div className="product-actions">
                            <div id="product-actions">
                                <button className="add-product-btn">Adicionar a carroça</button>
                                <input className="product-qtt-input" type="number"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighLight;