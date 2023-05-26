import React, { useState } from 'react'
import { styled } from 'styled-components'

import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { data } from './Data';


function Carousel() {

  const [sliderindex, setsliderindex] = useState(0);

//Functionality's
const handleClick=(direction)=>{
  console.log('handleClick');
  if(direction ==='left'){
setsliderindex(sliderindex > 0 ? sliderindex-1 : 30)
  }else{
    setsliderindex(sliderindex < 30 ? sliderindex+1 : 0)
  }
}


  return (
    <Container>
      <ArrowArea direction="left" onClick={()=>handleClick('left')}>
<ArrowLeftOutlined />
      </ArrowArea>
      <Wrapper sliderindex={sliderindex}>
        {data.map(items=>(
          <MainCarousel key={items.id}>
<ImgCarousel>
<Images src={items.images[0]}>

          
</Images>
</ImgCarousel>
<InfoCarousel>
<Title>{items.title}</Title>
        <Description>{items.description}</Description>
        <Description>Price: {items.price}/-</Description>
        <Button>Buy</Button>
</InfoCarousel>
</MainCarousel>
        ))}
        

      </Wrapper>
      <ArrowArea direction="right" onClick={()=>handleClick('right')}>
<ArrowRightOutlined />
      </ArrowArea>

    </Container>
  )
}

export default Carousel


//styling:
const Container = styled.div`
height: 80vh;
display: flex;
overflow: hidden;
position: relative;
background:linear-gradient(120deg, #ff9900, #146eb4);
`
const ArrowArea = styled.div`
width: 50px;
height: 50px;
background-color:whitesmoke;
border-radius: 50%;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
opacity: 0.5  ;
position: absolute;
margin: auto;
top:0;
bottom:0;
left: ${props => (props.direction === 'left' ? '10px' : '')};
right: ${props => (props.direction === 'right' ? '10px' : '')};

z-index: 2;

` 
const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props=>props.sliderindex * -100}vw);
transition: all 1.5s ease;
`
const MainCarousel = styled.div`
display: flex;
align-items: center;
height: 100vh;
width: 100vw;
`
const ImgCarousel = styled.div`
flex:1;
height: 100%;
`
const InfoCarousel = styled.div`
flex:1;
padding: 50px;
`
const Images = styled.img`
height: 80%;
`
const Title = styled.h1`
font-size: 30px;
`
const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
`
const Button = styled.button`
background-color: #FA8900;
padding:10px;
width: 5rem;
border: none;
border-radius: 0.5rem;
font-size: large;
cursor: pointer;


`