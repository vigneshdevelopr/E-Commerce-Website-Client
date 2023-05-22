import React from 'react'
import { styled } from 'styled-components'

function Announcements() {
//styling
const Container = styled.div`
background-color:lightsalmon;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 450;
height: 2rem;
`

  return (
    <Container>
Hey! Don't Miss the Big Saving Days Deals
    </Container>
  )
}

export default Announcements