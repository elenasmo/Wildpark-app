import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: Helvetica;
    font-size:  18px; 
    background-color: white;
}
`
export default GlobalStyle
