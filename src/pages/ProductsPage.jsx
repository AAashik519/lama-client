 
import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding:"10px" ,flexDirection:"column"})}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({  height:"40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({  padding:"10px " })}
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const FilterContaier= styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0;
`
const Filter= styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle= styled.span`
    font-size: 20px;
    font-weight: 200;
`
const  FilterColor= styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props =>props.color};
margin: 0 5px;
cursor: pointer;
    
`
const  FilterSize= styled.select `
 margin-left: 10px;;
`
const  FilterSizeOption= styled.option`
    
`
const   AddContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`
const  AmmountContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    
`
 
const    Ammount= styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`
 
const    Button= styled.button`
    border: 2px solid teal;
    background-color: #fff;
    cursor: pointer;
    padding: 12px;
    border-radius: 10px;
   font-weight: 600;


   &:hover{
       background-color: #f8f4f4;
   }
`

const ProductsPage = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>

        <InfoContainer>
          <Title>Denim Jumpsui</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>

            <FilterContaier>
                <Filter> 
                    <FilterTitle> Color</FilterTitle>
                    <FilterColor color='black' />
                    <FilterColor color='darkblue' />
                    <FilterColor color='gray' />
                </Filter>

                <Filter> 
                    <FilterTitle> Size</FilterTitle>
                    <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    <FilterSizeOption>XXL</FilterSizeOption>
               

                    </FilterSize>
                </Filter>
            </FilterContaier>

            <AddContainer>
                <AmmountContainer> 
                    <Remove />
                    <Ammount> 1 </Ammount>
                    <Add />  
                </AmmountContainer>
                    <Button> ADD TO CART</Button>
            </AddContainer>

          

        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductsPage;
