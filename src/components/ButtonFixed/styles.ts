import styled from "styled-components";

export const Button = styled.a`
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 900;

  img {
    width: 7rem;
    height: 2.5em;
  }

  @media (min-width: 1024px) {
    bottom: 30px;
    right: 30px;
    z-index: 1000;

    img {
      width: 14.5rem;
      height: 3.5em;
    }
  }
`
