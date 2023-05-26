import React from 'react'
import { styled } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function NavBar() {
    //styling:
    const Container = styled.div`
    height: 60px;
    background-color:transparent;
    `


const Area = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`

const LeftArea = styled.div`
flex: 1;
display: flex;
align-items:'center';
`
const CenterArea = styled.div`
flex: 1;
text-align: center;
`
const InputArea= styled.input`
border:none;
background-color: transparent;
`

const RightArea = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

`
const LangSelect = styled.span`
cursor: pointer;
`
const SearchBar = styled.span`
border: 0.5px solid grey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Logo = styled.h1`
font-family: 'Dancing Script', cursive;
`
const Menu = styled.div`
cursor: pointer;
font-style: 14px;
margin-left: 25px;
`
  return (
    <Container>
        <Area>
<LeftArea>
    <LangSelect>EN</LangSelect>
    <SearchBar>
        <InputArea placeholder='Search Here' />
        <SearchIcon style={{color:'gray',fontSize:'20px'}} />

    </SearchBar>
</LeftArea>
<CenterArea><Logo>Elite Emporium</Logo></CenterArea>
<RightArea>
<Menu>Register</Menu>
<Menu>SignIn</Menu>
<Menu>
<Badge badgeContent={4} color="primary">
<ShoppingCartOutlinedIcon /> 
</Badge>
</Menu>
</RightArea>
        </Area>
        
    </Container>
  )
}

export default NavBar