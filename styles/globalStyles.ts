import styled, { createGlobalStyle, css } from "styled-components"

// theme is now fully typed
export const MyComponent = styled.div`
  color: ${(props) => props.theme.colors.main};
`

// theme is also fully typed
export const MyGlobalStyle = createGlobalStyle`  
@font-face {
  font-family: 'Arial Black';
  src: url('/assets/fonts/ariblk.ttf')  format('truetype'), /* Safari, Android, iOS */
}
  /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
  html, body {
    font-family: 'Helvetica Neue',Baskervville, serif, Arial, Helvetica, sans-serif;
    background-color: ${(props) => props.theme.colors.secondary};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    text-rendering: optimizeLegibility;    
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
export const cssHelper = css`
  border: 1px solid ${(props) => props.theme.borderRadius};
`
