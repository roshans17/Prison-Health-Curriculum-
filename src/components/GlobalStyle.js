import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}

body{
    background-color: white;
    overflow-x: hidden;
}
button{
    font-weight:bold;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 3px solid #F2EFE9;
    color: black;
    transition: all 0.5s ease;
    border-radius: 10px;
    &:hover{
        background: transparent;
        color: #F2EFE9;
    }
}
span {
    font-weight: bold;
    font-style: italic;
}
a{
    font-size:1.1rem;
}
`;

export default GlobalStyle;
