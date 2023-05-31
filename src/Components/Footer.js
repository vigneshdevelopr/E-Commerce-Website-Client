import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";
import { mobile } from "./Responsive";

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>
          Elite Emporium
          <span style={{ fontWeight: "lighter", fontSize: "15px" }}>.com</span>
        </Logo>
        <Description>
          Looking for an ecommerce content marketing example that manages to
          combine product links with written content in a non-salesy, totally
          helpful way? Look to Elite Emporium, an Elite Electronics,
          Accessories, Home care Products that also sells its own line of
          Productivity goods
        </Description>
        <SocialMedia>
          <Icons>
            <Facebook />
          </Icons>
          <Icons>
            <Instagram />
          </Icons>
          <Icons>
            <Twitter />
          </Icons>
        </SocialMedia>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Fashion</ListItem>
          <ListItem>Mobiles and Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms and Conditions</ListItem>
          <ListItem>Careers</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <Contact>
          <Room />
          321, Ram Nagar, Anna Nagar, Chennai
        </Contact>
        <Contact>
          <Phone />
          +91 98******73
        </Contact>
        <Contact>
          <Mail />
          vigneshwebdevelopr@gmail.com
        </Contact>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;

//styling:

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}

`;
const Logo = styled.h1``;
const Description = styled.p`
  text-align: justify;
  margin: 20px 0px;
`;
const Icons = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  cursor: pointer;
`;
const SocialMedia = styled.div`
  display: flex;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  text-align: center;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const Contact = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const Payment = styled.img`
width: 50%;`;
