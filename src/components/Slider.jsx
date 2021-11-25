import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems} from './data'
import {mobile} from '../responsive'
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  ${mobile({ display:"none"})}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props =>props.slideIndex * -100}vw);
  transition: all 1.2s ease;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.4;
  z-index: 2;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Image = styled.div`
  height: 80%;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {

        const [slideIndex, setSlideIndex]= useState(0)

        const handleClick=(direction)=>{
        if(direction ==='left'){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }

         else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleClick('left')} >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>

        {sliderItems.map((item)=>(

        <Slide bg={item.bg } key={item.id}  >
          <ImgContainer>
            <img src={item.img} />
          </ImgContainer>

          <InfoContainer>
            <Title>{item.title} </Title>
            <Desc>
               {item.desc}
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
         ) )}


       
      </Wrapper>
      <Arrow direction="right"  onClick={()=> handleClick('right')} >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;


// https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg?size=626&ext=jpg


// "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjBzaG9wcGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=450 "