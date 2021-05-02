import React from 'react';
import styled from 'styled-components';

import './style.css'

const HighLight = () => {
    return (
        <div className="highlight-container">
            <h2>Destaques</h2>
            <div className="flex-highlights">
                <div className="flex-highlights-item">
                    <div className="card-flex-highlight">
                        <h3>Machado Vikings</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighLight;