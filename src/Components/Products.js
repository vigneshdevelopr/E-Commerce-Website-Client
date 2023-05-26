import React from 'react'
import { styled } from 'styled-components'
import { popularProducts } from './Data'
import Product from './Product'

function Products() {
  return (
    <>
            <h1 style={{textAlign:'center',margin:'2rem'}}>Most Purchased Products</h1>

    
    <Container>
      
        {popularProducts.map((item) =>(
          <Product item={item} key={item.id} />
        ))}
    </Container>
    </>
  )
}

export default Products
//styling:

const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;
`