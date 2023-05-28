import styled from '@emotion/styled'
import React from 'react'
import Base from '../Base/Base'
import Announcements from '../Components/Announcements'
import { mobile } from '../Components/Responsive'

function ProductList() {
  return (
    <Container>
<Base>
<Title>Mobiles</Title>
<FilterContainer>
    <Filter><FilterText>Filter Products</FilterText>
    <Select>
    <Options disabled selected>
        Color
    </Options>
    <Options>White</Options>
    <Options>Black</Options>
    <Options>Red</Options>
    <Options>Blue</Options>
    <Options>Yellow</Options>
    <Options>purple</Options>
    <Options>orange</Options>
    <Options>brown</Options>
    <Options>Green</Options>
    
    </Select>
    <Select>
    <Options disabled selected>
        Size
    </Options>
    <Options>xs</Options>
    <Options>s</Options>
    <Options>m</Options>
    <Options>l</Options>
    <Options>xl</Options>
    <Options>xxl</Options>
    <Options>xxxl</Options>
    
    
    </Select>
    
    
    
    </Filter>



    <Filter><FilterText>Sort Products</FilterText>
    <Select>
    <Options disabled selected>
        ----
    </Options>
    <Options>Newest</Options>
    <Options>Most Purchased</Options>
    <Options>Price: low to high</Options>
    <Options>price: high to low</Options>
    <Options>Mostly Recommended</Options>    
    </Select>
    
    
    </Filter>
</FilterContainer>

</Base>
    </Container>
  )
}

export default ProductList

//styling:
const Container = styled.div`

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`
const Title = styled.h1`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 500;
margin-right: 20px;

${mobile({ marginRight: "0px" })}


`
const Select = styled.select`
padding: 10px;
margin-right: 20px;

${mobile({ margin: "10px 0px" })}


`
const Options = styled.option`

`