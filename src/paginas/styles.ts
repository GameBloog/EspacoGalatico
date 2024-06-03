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

  button {
    width: 300px;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding: 0.2rem;
    margin-bottom: 1rem;
  }
`

export const WhatIs = styled.div`
  max-width: 262px;

  h1 {
    font-family: "Galada", cursive;
  }

  p {
    font-family: "Poppins", sans-serif;
  }
`
export const CallToAction = styled.div`
  max-width: 312px;
  text-align: center;
  margin-bottom: 1.2rem;
`

export const RoudendImg = styled.div`
  img {
    width: 279px;
    height: 279px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
`

//MobileHomePage---------------------------------------------------------------------------------------------------------------------------------------------

export const RotasDeNav = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    width: 138px;
    height: 41px;
    border: 1px solid red;
    border-radius: 7px;
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 70px;
    height: 70px;
  }
`

export const ImageWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  max-width: 295;
  margin-bottom: 3rem;

  p {
    text-align: center;
    width: 200px;
  }
`
export const SectionImg = styled.div`
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1rem;

  h1 {
    font-family: "Galada", cursive;
    text-align: center;
    max-width: 19rem;
  }

  p {
    display: flex;
    justify-content: center;
    width: 14rem;
    text-align: center;
  }

  button {
    width: 300px;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding: 0.2rem;
    margin-bottom: 1rem;
  }
`

export const ImgItalia = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 0.6rem;

  img {
    max-width: 226px;
    max-height: 291px;
  }
`
