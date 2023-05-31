import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";

function Product({ item }) {
  return (
    <Container>
      <Image src={item.img} />

      <Info>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
//styling:

const Info = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  & :hover{
    opacity: 1;
  }
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border-radius: 8px;
  position: relative;


  &:hover ${Info}{
opacity: 1;
  }
`;
const Image = styled.img`
  width: 75%;
`;


const Icon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 background-color: black;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 1rem;
 cursor: pointer;
 transition: all 0.4s ease-in-out;

 &:hover{
  background-color: #521383;
  transform: scale(1.1);  //zoom in and out maari varum 

 }
`;
