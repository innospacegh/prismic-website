import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyles = createGlobalStyle`
    ${normalize()}
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-style: normal;
        text-rendering: optimizeLegibility;
    }
`
