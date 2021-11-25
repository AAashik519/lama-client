import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const   Agreement= styled.span`
    font: 12px;
    margin: 20px 0px;
`
const    Button= styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    border-radius: 3px;
    `
const Register = () => {
    return (
        <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    )
}

export default Register
