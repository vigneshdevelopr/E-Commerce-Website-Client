import React from 'react'
import { styled } from 'styled-components'

function CategoriesItem({item}) {
  return (
    <Container>
<Image src={item.images} />
<Info>
    <Title>{item.title}</Title>
    <Button>Shop Now !</Button>
</Info>
    </Container>
  )
}

export default CategoriesItem
//styling:

const Container = styled.div`
 flex: 1;
 margin: 3px;
 height: 70vh;
 position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;


`;

const Info = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 color: white;
 flex-direction: column;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Title = styled.h1`
color: white;
margin-bottom: 2rem;
    
`;

const Button = styled.button`
    border:none;
    padding: .5rem;
    cursor: pointer;
    background-color: #FA8900;
    border-radius: 20%;
    font-weight: bold;
    
`;