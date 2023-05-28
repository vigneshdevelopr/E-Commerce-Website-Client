import React from 'react'
import { styled } from 'styled-components'


import Base from '../Base/Base'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../Components/Responsive'

function Products() {
  return (
    <Container>
     <Base>
     <Wrapper>
      <ImageContainer>
        <Image src='https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dwcd6255fb/images/hi-res/182981263/182981263_1_Front.jpg?sw=451&sh=600' />    
          </ImageContainer>
<InfoContainer>
  <Title>
Levis Denim Jeans
  </Title>
<Description>
Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing
</Description>
<Price>
$ 25
</Price>
<FilterContain>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSizes>
                <Sizes>XS</Sizes>
                <Sizes>S</Sizes>
                <Sizes>M</Sizes>
                <Sizes>L</Sizes>
                <Sizes>XL</Sizes>
              </FilterSizes>
            </Filter>
          </FilterContain>
          <AddContain>
            <AmountContain>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContain>
            <Button>ADD TO CART</Button>
          </AddContain>

</InfoContainer>
     </Wrapper>
     </Base>   
    </Container>
  )
}

export default Products

//styling:

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;

${mobile({ padding: "10px", flexDirection:"column" })}

`
const ImageContainer = styled.div`
flex:1
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh" })}

`
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;

${mobile({ padding: "10px" })}

`
const Title = styled.h1`
font-weight: 200;
`
const Description = styled.p`
margin: 20px 0px
`
const Price = styled.span`
font-weight: bold;
font-size: larger;


`
const FilterContain = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSizes = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const Sizes = styled.option``;

const AddContain = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;


  ${mobile({ width: "100%" })}

`;

const AmountContain = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: black;
      color: whitesmoke;
  }
`;
