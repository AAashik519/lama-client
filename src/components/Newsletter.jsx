 
 
import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container =styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
   

`
const Title = styled.h1 `
        font-size: 70px;
        margin-bottom: 20px;
        margin-bottom: 20px;
`

const  Description = styled.div`
    font-size: 24px;
    font-weight: 400;
    ${mobile({  textAlign:"center" })}
`
const InputConatiner= styled.div`
        width: 50%;
        height: 40px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        border-bottom: 1px solid lightgray;
        ${mobile({  width:"80%" })}
       
`
const Input= styled.input`
    border: none;
    flex:8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #fff;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter </Title>
            <Description> Get timely from your favourite products. </Description>
            <InputConatiner>
                <Input placeholder=' Enter your email address' />
                <Button >
                      <Send /> 
                </Button>
             
             </InputConatiner>
            
        </Container>
    )
}

export default Newsletter
