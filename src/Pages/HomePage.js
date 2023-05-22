import React from 'react'
import NavBar from '../Components/NavBar'
import Announcements from '../Components/Announcements'
import Carousel from '../Components/Carousel'

function HomePage() {
  return (
    <>
     <Announcements />
    <NavBar />
    <Carousel />
    </>
   
  )
}

export default HomePage