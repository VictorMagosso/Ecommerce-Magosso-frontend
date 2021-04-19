import React, { useEffect, useState } from 'react'
import PageDefault from '../PageDefault'
import styled from 'styled-components'
import { productsApi } from '../../api'

const DefaultDiv = styled.div `
    height: 100vh;
`

const Products = () => {
    const [products, setProduct] = useState([])
    
    productsApi().get('all')
        .then(e => {
            setProduct(e.data);
        })

    return (
    <PageDefault>
        <DefaultDiv>
            <ul>
            {products.map(v => (
                <li key={v.cProductName}>{v.cProductName}</li>
            ))}
            </ul>
        </DefaultDiv>
    </PageDefault>
    )}

export default Products