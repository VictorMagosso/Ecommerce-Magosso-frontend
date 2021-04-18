import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styled from 'styled-components'

const PageDefault = (props) => (
    <div>
    <Header/>
    {props.children}
    <Footer/>
    </div>
);

export default PageDefault;