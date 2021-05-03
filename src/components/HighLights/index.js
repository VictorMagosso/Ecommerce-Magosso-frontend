import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Adaga, AxePhoto, LineDecoration, Shield, LineDecorationBlue } from '../../utils/images';


import './style.css'

const Title = styled.p `
    display: inline;
    color: #373E4D;
    font-size: 64px;
`

const HighLight = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: false
        };
    return (
        <div className="highlight-container">
            <div>
                <Title>Destaques</Title>
                <img src={LineDecoration}/>
            </div>
            <Slider {...settings} className="flex-highlights">
                {/* inicio card */}
                <div className="flex-highlights-item">
                    <div className="card-flex-highlight">
                        <div className="img-title">
                            <h3 className="product-title">Machado Vikings</h3>
                            <img width="240" height="240" className="product-img" src={AxePhoto}/>
                        </div>
                        <p className="product-description">Réplica do machado utilizado por Ragnar na série Vikings</p>
                        <div className="money-component">
                            <span>R$ </span><span className="product-price">
                                <b>89,90</b>
                            </span>
                        </div>
                        <div className="product-actions">
                            <div id="product-actions">
                                <button className="add-product-btn">Adicionar a carroça</button>
                                <input min={0} className="qtt-number" type="number" defaultValue={0}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* inicio card */}
                <div className="flex-highlights-item">
                    <div className="card-flex-highlight">
                        <div className="img-title">
                            <h3 className="product-title">Escudo Odin</h3>
                            <img width="240" height="240" className="product-img" src={Shield}/>
                        </div>
                        <p className="product-description">Escudo de Odin personallizado tamanho real</p>
                        <div className="money-component">
                            <span>R$ </span><span className="product-price">
                                <b>89,90</b>
                            </span>
                        </div>
                        <div className="product-actions">
                            <div id="product-actions">
                                <button className="add-product-btn">Adicionar a carroça</button>
                                <input min={0} className="qtt-number" type="number" defaultValue={0}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* inicio card */}
                <div className="flex-highlights-item">
                    <div className="card-flex-highlight">
                        <div className="img-title">
                            <h3 className="product-title">Adaga Medieval</h3>
                            <img width="240" height="240" className="product-img" src={Adaga}/>
                        </div>
                        <p className="product-description">Adaga de combate medieval com bainha metálica</p>
                        <div className="money-component">
                            <span>R$ </span><span className="product-price">
                                <b>89,90</b>
                            </span>
                        </div>
                        <div className="product-actions">
                            <div id="product-actions">
                                <button className="add-product-btn">Adicionar a carroça</button>
                                <input min={0} className="qtt-number" type="number" defaultValue={0}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* inicio card */}
                <div className="flex-highlights-item">
                    <div className="card-flex-highlight">
                        <div className="img-title">
                            <h3 className="product-title">Machado Vikings</h3>
                            <img width="240" height="240" className="product-img" src={AxePhoto}/>
                        </div>
                        <p className="product-description">Réplica do machado utilizado por Ragnar na série Vikings</p>
                        <div className="money-component">
                            <span>R$ </span><span className="product-price">
                                <b>89,90</b>
                            </span>
                        </div>
                        <div className="product-actions">
                            <div id="product-actions">
                                <button className="add-product-btn">Adicionar a carroça</button>
                                <input min={0} className="qtt-number" type="number" defaultValue={0}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* inicio card */}
                <div className="flex-highlights-item">
                    <div className="card-flex-highlight">
                        <div className="img-title">
                            <h3 className="product-title">Machado Vikings</h3>
                            <img width="240" height="240" className="product-img" src={AxePhoto}/>
                        </div>
                        <p className="product-description">Réplica do machado utilizado por Ragnar na série Vikings</p>
                        <div className="money-component">
                            <span>R$ </span><span className="product-price">
                                <b>89,90</b>
                            </span>
                        </div>
                        <div className="product-actions">
                            <div id="product-actions">
                                <button className="add-product-btn">Adicionar a carroça</button>
                                <input min={0} className="qtt-number" type="number" defaultValue={0}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* inicio card */}
                <div className="flex-highlights-item">
                    <div className="card-flex-highlight">
                        <div className="img-title">
                            <h3 className="product-title">Machado Vikings</h3>
                            <img width="240" height="240" className="product-img" src={AxePhoto}/>
                        </div>
                        <p className="product-description">Réplica do machado utilizado por Ragnar na série Vikings</p>
                        <div className="money-component">
                            <span>R$ </span><span className="product-price">
                                <b>89,90</b>
                            </span>
                        </div>
                        <div className="product-actions">
                            <div id="product-actions">
                                <button className="add-product-btn">Adicionar a carroça</button>
                                <input min={0} className="qtt-number" type="number" defaultValue={0}/>
                            </div>
                        </div>
                    </div>
                </div>
                </Slider>
            <div  className="custom-form-container">
                <div>
                    <Title>Peça o seu personalizado</Title>
                    <img width="580" src={LineDecorationBlue}/>
                </div>
            </div>
        </div>
    )
}

export default HighLight;