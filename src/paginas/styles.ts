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
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
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
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
`

//MobileHomePage---------------------------------------------------------------------------------------------------------------------------------------------

//HorariosDeServiço---------------------------------------------------------------------------------------------------------------------------------------------

export const HorariosDeServico = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    width: 138px;
    height: 41px;
    border-radius: 7px;
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  h2 {
    color: black;
    font-family: "Poppins", sans-serif;
    line-height: 30px;
    font-weight: 700;
    font-size: 20px;
  }
`

export const BoxShadow = styled.div`
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.5);
`

export const Img = styled.div`
  img {
    width: 70px;
    height: 70px;
  }
`

//HorariosDeServiço---------------------------------------------------------------------------------------------------------------------------------------------

export const ImageWithTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 2rem;

  background-color: ${(props) => props.theme["green-500"]};
  p {
    width: 200px;
  }
`

export const SectionImg = styled.div`
    margin-bottom: 1rem;
`

//EspaçoFestas---------------------------------------------------------------------------------------------------------------------------------------------

export const EspacoFestas = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    gap: 1rem;
    padding: 2rem;
    background-color: ${(props) => props.theme["green-500"]};

  h3 {
    font-size: xx-large;
    font-family: "Galada", cursive;
    text-align: center;
    width: 19rem;
    margin: 8px;
  }

  p {
    display: flex;
    justify-content: center;
    width: 14rem;
    text-align: center;
  }

  button {
    width: 250px;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding: 0.2rem;
    margin-bottom: 1rem;
  }
`

//EspaçoFestas---------------------------------------------------------------------------------------------------------------------------------------------

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

export const PratosItalia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.2rem;
  margin-bottom: 3rem;
  padding: 2rem;

  background-color: ${(props) => props.theme["green-500"]};
  p {
    width: 200px;
  }

  button {
    width: 250px;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding: 0.2rem;
    margin-bottom: 1rem;
  }
`

export const Reserve = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  h3 {
    font-size: xx-large;
    font-family: "Galada", cursive;
    text-align: center;
    width: 19rem;
    margin: 8px;
  }

  p {
    font-family: "Poppins", sans-serif;
  }

  button {
    width: 270px;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding: 0.2rem;
    margin-bottom: 1rem;
  }
`

//MobileLastPage---------------------------------------------------------------------------------------------------------------------------------------------

export const MobileLastPage = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    width: 250px;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding: 0.2rem;
    margin-bottom: 1rem;
  }
`

export const ImgLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`

//MobileLastPage---------------------------------------------------------------------------------------------------------------------------------------------

