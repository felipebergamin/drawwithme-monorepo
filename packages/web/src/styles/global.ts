import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;

    box-sizing: border-box;
  }

  #__next, body, html {
    height: 100vh;
    width: 100vw;
  }

  body {
    font-family: 'Rubik', sans-serif;
    background-color: #ddd;
    color: #2d2d2d;
  }
`;
