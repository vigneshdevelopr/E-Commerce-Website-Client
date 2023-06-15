import styled from '@emotion/styled'
import React from 'react'
import successicon from '../assets/success.png'

function PaymentSuccess() {
  return (
    <Container>
        <Successicon src={successicon} />
<Header>Payment Success</Header>
<SubHeader>Your Order has been Preparing</SubHeader>
<SubHeader>Thanks for choosing EliteEmporium</SubHeader>
    </Container>
  )
}

export default PaymentSuccess
//styling:

const Container = styled.div`
margin-top: 20%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Header = styled.h1`
font-size: x-large;

`
const SubHeader = styled.h4`
font-size: large;

color: grey;
`
const Successicon = styled.img`
`