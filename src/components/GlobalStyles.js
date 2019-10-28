import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
#root{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
body {
    margin: 0;
    font-family: Helvetica;
    font-size:  18px; 
    background-color: white;
    
}
`
export default GlobalStyle
