import { Button } from '@mui/material'
import React, { useState,useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { styled } from 'styled-components'

const KEY = 'pk_test_51NGPWeSIzL8sqDiiOlxd5QYXjiPoPLqOXVmDScIvs1fXnmtD3vPbcwJADxE5brn5noXy9o8801snFt2Wq59TcVAO00y4MxGYGi'
function PaymentPage() {
  const[stripeToken, setStripeToken] = useState(null)
 const onToken = (token) => {
    
    setStripeToken(token);
  }
  console.log(stripeToken);
useEffect(()=>{
  const makeRequest = async() =>{
try {
  const response = await fetch("http://localhost:5000/checkout/payment",{
    method: "POST",
    tokenId: stripeToken.id,
    amount: 3000,
  })
  console.log(response.data)
} catch (error) {
  console.log(error)
}
  }
  makeRequest(); 
},[stripeToken])

  return (
    <Container>
<Buttons>
  <StripeCheckout
  name='EliteEmporium'
  image='https://teeshopper.in/store_page_asset/images/EliteEmporium.png'
  email="vigneshwebdevelopr@gmail.com"
  shippingAddress
  billingAddress={false}
  token={onToken}
  currency='INR'
  amount={3000}
  stripeKey={KEY}


  >
  <Button style={{backgroundColor:'black',color:'red', padding:'2cm',borderRadius:'10px',fontSize:'larger'}} variant='contained'>Click to Pay</Button>
  </StripeCheckout>
   
</Buttons>
    </Container>
  )
}

export default PaymentPage

//styling:

const Container = styled.div`
color: black;
`;

const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 50vh;

&:hover{
    background-color: white !important;
}
`
