import { css } from "styled-components"



export const mobile = (props) =>{
return css`
@media screen and (max-width: 500px) {
${props}
}
`
}

// export const Tablet = (props) =>{
//     return css`
//     @media screen and (max-width: 380px) {
//     ${props}
//     }
//     `
//     }

