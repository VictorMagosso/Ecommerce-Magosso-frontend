import React from 'react'
import styled from 'styled-components';
import { Compass, SwordAlt } from '../../utils/images';

import './style.css';

const BannerDiv = styled.div `
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
`

const BannerSentence = styled.p `
    font-size: 64px;
    text-align: right;
`

const Paragraph = styled.p `
    font-size: 36px;
`

const Banner = () => {
    return (
        <BannerDiv>
            <img className="swords" src={SwordAlt} width="104"/>
            <div className="left-side">
                <BannerSentence>Réplicas de equipamentos<br></br><b>medievais</b></BannerSentence>
                <Paragraph>a partir de R$ 59,90</Paragraph>
                <button className="explore-btn">Explorar <img className="img-compass" width="32" src={Compass}/></button>
            </div>
        </BannerDiv>
    )
}

export default Banner;