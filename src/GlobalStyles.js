import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 100 900;
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  }

body {
    font-family: 'Montserrat', sans-serif;
    margin: 0em 4.5em;
}

`;

export default GlobalStyles;