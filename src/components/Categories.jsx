 
import React from 'react'
import styled from 'styled-components'
import   {categories } from '../components/data'
import CategoriesItem from './CategoriesItem'
import {mobile} from '../responsive'
const Conatiner= styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({  padding:"0px",  flexDirection:'column' })}
`
const Categories = () => {
    return (
        < Conatiner>
            { 
            categories.map((item)=>(
                <CategoriesItem item={item} />
            ))
            }
        </Conatiner>
    )
}

export default Categories

