import React from 'react';
import { CompassVikings, HelmetAxes, Ship } from '../../utils/images';
import styled from 'styled-components';

import './style.css';

const VikingsSentence = styled.p `
    font-size: 64px;
`

const Paragraph = styled.p `
    font-size: 36px;
`

const VikingsBanner = () => {
    return (
        <div className="vikings-container">
            <img className="compass-viking" src={CompassVikings} width="104"/>
            <div className="left-side">
                <VikingsSentence>Especial Vikings</VikingsSentence>
                <Paragraph>Réplicas de artefatos utilizados na série vikings</Paragraph>
                <img width="128" height="175" src={HelmetAxes}/>
            </div>
                <button className="explore-vikings-btn">Ir para sessão Vikings <img className="img-compass" width="45" src={Ship}/></button>
        </div>
    )
}

export default VikingsBanner;