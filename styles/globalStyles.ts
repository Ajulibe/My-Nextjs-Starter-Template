/* eslint-disable @typescript-eslint/indent */
import styled, { createGlobalStyle, css } from "styled-components"

// theme is now fully typed
export const MyComponent = styled.div`
  color: ${(props) => props.theme.colors.main};
`

// theme is also fully typed
export const MyGlobalStyle = createGlobalStyle`  
  html, body {
    font-family: 'Didact Gothic',Raleway,Baskervville, serif, Arial, Helvetica, sans-serif;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    -webkit-font-smoothing: subpixel-antialiased;
    text-rendering: optimizeLegibility;    
    display: flex;
    justify-content: center;
    align-items: center;
  }


  @media only screen and (max-width: 858px) {
    html, body {
      font-size: 95%;
  
    }
  }
  @media only screen and (max-width: 768px) {
    html, body {
      font-size: 71.5%;
    }
  }

  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
    box-sizing: inherit;
  }
`

// and this theme is fully typed as well
export const cssHelper = css``
