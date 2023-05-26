import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import { styled } from 'styled-components'

function Footer() {
  return (
    <Container>
<Left>
    <Logo>Elite Emporium<span style={{fontWeight:'lighter',fontSize:'15px'}}>.com</span></Logo>
    <Description>
    Looking for an ecommerce content marketing example that manages to combine product links with written content in a non-salesy, totally helpful way?

Look to Elite Emporium, an Elite Electronics, Accessories, Home care Products that also sells its own line of Productivity goods
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
<Right></Right>
    </Container>
  )
}

export default Footer

//styling:

const Container = styled.div`
display: flex;
`
const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 padding: 20px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;

`
const Logo = styled.h1`
`
const Description = styled.p`
text-align: justify;
margin: 20px 0px;
`
const Icons = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin-right: 1.5rem;
cursor: pointer;

`
const SocialMedia = styled.div`
display: flex;
`

const Title = styled.h1`
margin-bottom: 30px;
text-align: center;
`
const List = styled.ul`
margin: 0;
padding: 0; 
list-style: none; 
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
text-align: center;
cursor: pointer;
&:hover{
    transform: scale(1.1);
}

`