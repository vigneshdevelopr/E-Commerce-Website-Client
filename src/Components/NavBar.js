import React from 'react'
import { styled } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { mobile } from './Responsive';

function NavBar() {
  const history = useHistory();
   
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
<Menu onClick={()=>history.push('/login')}>SignIn</Menu>
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


 //styling:
 const Container = styled.div`
 height: 60px;
 background-color:transparent;

${mobile({height: "70px"})}

 `


const Area = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
${mobile({padding: "10px 0px"})}

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
${mobile({ width: "50px" })}

`

const RightArea = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}


`
const LangSelect = styled.span`
cursor: pointer;
${mobile({ display: "none" })}

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
${mobile({ fontSize: "24px" })}

`
const Menu = styled.div`
cursor: pointer;
font-style: 14px;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}

`