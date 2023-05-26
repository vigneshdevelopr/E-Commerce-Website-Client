import { Send } from '@mui/icons-material'
import React from 'react'
import { styled } from 'styled-components'

function News() {
    
  return (
    <Container>
<Title>Newsletter</Title>
<Description>Get the Recent Updates from Elite Emporium </Description>
<InputContainer>
<Input placeholder='Enter Your Email' />
<Button>
    <Send /> 
</Button>
</InputContainer>

    </Container>
  )
}

export default News

//styling:
const Container = styled.div`
height: 60vh;
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Description = styled.div`
font-size: 24px;
font-weight: 200;
margin-bottom: 20px;

`
const InputContainer = styled.div`
width: 50%;
height: 40px;
display: flex;
justify-content: space-between;
border: 0.5px solid lightgray;

  
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 10px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
cursor: pointer;

`