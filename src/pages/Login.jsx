import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
 
const  Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

      display: flex;
     justify-content: center;
     align-items: center;
     background-size: cover;

    
  
`
const Wrapper = styled.div`
   padding: 20px;
   width: 25%;
   background-color: #fff;
   ${mobile({width:"75%" })}
`
const  Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    ${mobile({ margin:"5px 0" })}
`

const Form = styled.form`
 display: flex;
 flex-direction: column;
`
const   Input= styled.input`
    flex: 1;
    min-width: 50%;
    margin: 20px 10px 0 0;
    padding: 10px;
   
`

 
const    Button= styled.button`
    width: 40%;
    border:none;
    padding: 15px 15px;
    background-color: teal;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    margin: 10px 0;
    border-radius: 3px;
    `
    
     const Link = styled.a`
         margin: 5px 0;
         font-size: 13px;
        text-decoration: underline;
        cursor: pointer;
     
     ` 

const Login = () => {
    return (
        <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    )
}

export default Login
