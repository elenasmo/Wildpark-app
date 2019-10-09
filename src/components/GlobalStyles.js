import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: Helvetica;
    font-size:  18px; 
    background-color: hsl(35, 10%, 93%);
}
`
export default GlobalStyle
