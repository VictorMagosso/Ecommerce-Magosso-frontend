import React from 'react'
import styled from 'styled-components'

const NavList = styled.li`
    list-style: none;
    display: inline;
    float: right;
    padding: 8px 12px;
    color: ${props => props.default ? '#999999' : '#FFFFFF'};

    &:hover {
        box-shadow: 0 0.1px 7px 0.1px rgba(255, 255, 255, 0.1);
        border-radius: 0 12px 0 12px;
        border-bottom: 1px solid #FFFFFF;
        transition: 0.3s linear;
    }

    &:hover a {
        color: grey;
    }
`

export default NavList