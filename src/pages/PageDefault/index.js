import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const PageDefault = (props) => (
    <div>
    <Header/>
    {props.children}
    <Footer/>
    </div>
);

export default PageDefault;