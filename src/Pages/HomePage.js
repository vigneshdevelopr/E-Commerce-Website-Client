import React from 'react'
import NavBar from '../Components/NavBar'
import Announcements from '../Components/Announcements'
import Carousel from '../Components/Carousel'
import Categories from '../Components/Categories'
import { styled } from 'styled-components'
import Products from '../Components/Products'
import News from '../Components/News'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <>
    <Container>
     <Announcements />
    <NavBar />
    <Carousel />
    <Categories />
    <Products />
    <News />
    <Footer />
    </Container>
    </>
   
  )
}

export default HomePage
//styling:
const Container = styled.div`
background:linear-gradient(120deg, #6f1ab1, #000000);
background-repeat: repeat;
color: antiquewhite;

`