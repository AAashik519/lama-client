import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from './data'
import Product from './Product'


const Conatiner=styled.div`

display: flex;
padding: 20px;
 flex-wrap: wrap;
 justify-content: space-between;



`

const Products = ({cat,filters,sort}) => {
   
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])

        useEffect(()=>{
            const getProducts = async ()=>{
                try {
                    const res = await axios.get("http://localhost:5000/api/products")
                    console.log(res)
                } catch (error) {
                    console.log(error)
                }
            }
            getProducts()
        },[cat])

    return (
        <Conatiner >
             {
                popularProducts.map((item)=>(
                    <Product item={item} key={item.id} />
                ))
            }
        </ Conatiner>
    )
}

export default Products;
