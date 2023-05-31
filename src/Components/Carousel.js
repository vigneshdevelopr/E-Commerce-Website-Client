import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { data } from './Data';
import { mobile } from './Responsive';

function Carousel() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

 

  const handleButtonHover = (isHovered) => {
    setIsButtonHovered(isHovered);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isButtonHovered) {
        setSliderIndex((prevIndex) =>
          prevIndex < data.length - 1 ? prevIndex + 1 : 0
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isButtonHovered]);

  return (
    <Container>
      <Wrapper sliderIndex={sliderIndex}>
        {data.map((item) => (
          <MainCarousel key={item.id}>
            <ImgCarousel>
              <Images src={item.images[0]} alt={item.title} />
            </ImgCarousel>
            <InfoCarousel>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Description>Price: {item.price}/-</Description>
              <Button
                onMouseEnter={() => handleButtonHover(true)}
                onMouseLeave={() => handleButtonHover(false)}
              >
                Buy
              </Button>
            </InfoCarousel>
          </MainCarousel>
        ))}
      </Wrapper>
    </Container>
  );
}

export default Carousel;

// CSS Styles
const Container = styled.div`
  height: 80vh;
  display: flex;
  overflow: hidden;
  position: relative;
  /* background:linear-gradient(120deg, #6f1ab1, #000000); */
background-color: transparent;
  @media screen and (max-width: 500px){
    display: none;
  }

`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  transition: all 1.5s ease;
`;

const MainCarousel = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const ImgCarousel = styled.div`
  flex: 1;
  height: 100%;
`;

const Images = styled.img`
  height: 80%;
`;

const InfoCarousel = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #fa8900;
  padding: 10px;
  width: 5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: large;
  cursor: pointer;
`;
