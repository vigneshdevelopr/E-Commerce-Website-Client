import React from 'react'
import { styled } from 'styled-components'
import { mobile } from './Responsive'

function Announcements() {
//styling
const Container = styled.div`
background-color:#2E729F;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 450;
height: 2rem;
${mobile({height:'2cm'})}
`

  return (
    <Container>
Hey Guys! Don't Miss the Big Saving Days Deals
    </Container>
  )
}

export default Announcements