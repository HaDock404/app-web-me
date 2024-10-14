import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        width: 100%
        max-width: 100%;
        overflow-x: hidden;
        overscroll-behavior: none;
    }
    ::selection {
        background-color: black;
        color: white;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle