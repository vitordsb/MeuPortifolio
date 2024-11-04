import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    }
`;
export default GlobalStyle;
