import styled from "styled-components"

export const Container = styled.body`
  margin-top: 2rem;

  background: linear-gradient(
      179.98deg,
      rgba(255, 122, 0, 0) 6.58%,
      rgba(248, 123, 7, 0.65) 55.23%
    ),
    linear-gradient(
      179.98deg,
      rgba(255, 122, 0, 0) 6.58%,
      rgba(248, 123, 7, 0.65) 55.23%
    );
`

export const Header = styled.header`
  margin-bottom: 1.5rem;
`

export const Section = styled.section`
  margin-bottom: 1rem;
`

//MobileHomePage---------------------------------------------------------------------------------------------------------------------------------------------

export const MobileHomePage = styled.div`
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  img {
    /* max-width: 279px; */

    width: 279px;
    height: 279px;
    border-radius: 50%;
    margin-bottom: 5px;
  }

  button {
    /* max-width: 322px; */

    width: 322px;
    height: 57;
    border-radius: 1rem;
  }
`

export const WhatIs = styled.div`
  max-width: 262px;

  h1 {
    font-family: "Galada", cursive;
  }

  h2 {
    font-family: "Poppins", sans-serif;
  }
`
export const CallToAction = styled.div`
  max-width: 312px;
  text-align: center;
  margin-bottom: 5px;
`

//MobileHomePage---------------------------------------------------------------------------------------------------------------------------------------------

export const RotasDeNav = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 138px;
    height: 41px;
    border: 1px solid red;
    border-radius: 7px;
    margin-top: 1rem;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    line-height: 30px;
    font-weight: 700;
    font-size: 20px;
  }
`
export const Img = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`
