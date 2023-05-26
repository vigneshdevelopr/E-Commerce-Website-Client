import React from 'react'
import { styled } from 'styled-components'
import { Category } from './Data'
import CategoriesItem from './CategoriesItem'

function Categories() {
  return (
    <>
    <Heading>Categories</Heading>
    <Container>
    
{Category.map(item=>(
    <CategoriesItem item={item} key={item.id} />
))}
    </Container>
    </>
  )
}

export default Categories

//styling:
const Container = styled.div`
display: flex;
`
const Heading = styled.h1`
text-align: center;
margin: 2rem;
`
