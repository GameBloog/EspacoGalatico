import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
  }

  body{
    /* background-color: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["gray-900"]}; */
    background: linear-gradient(180deg, #015F43 0%, #00875F 100%); 
    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button{
    font: 400 1rem Roboto, sans-serif;
  }

  p {
        font-family: "Poppins", sans-serif;
        color: white;
  }

  h1 {
    font-family: "Galada", cursive;
    color: white;
  }
`
