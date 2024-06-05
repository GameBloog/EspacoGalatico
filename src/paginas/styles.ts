import styled from "styled-components"

export const Container = styled.body`
  margin-top: 2rem;
`

export const Header = styled.header`
  margin-bottom: 1.5rem;
`

export const Section = styled.section`
  margin-bottom: 1rem;
`

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

//MobileHomePage---------------------------------------------------------------------------------------------------------------------------------------------

export const MobileHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  button {
    max-width: 100%;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    margin-bottom: 1rem;

    font-weight: bold;

    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme["white"]};
  }
`

export const WhatIs = styled.div`
  max-width: 262px;

  p {
    font-family: "Poppins", sans-serif;
  }

  h1 {
    font-family: "Galada", cursive;
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
  }
`
export const CallToAction = styled.div`
  max-width: 312px;
  margin-top: 0.4rem;
  margin-bottom: 1.2rem;

  p {
    text-align: center;
    max-width: 290px;
  }
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

export const BoxShadow = styled.div`
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.5);
`

export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 120px;
    height: 120px;
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
  max-width: 250px;
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 2rem;

  background-color: ${(props) => props.theme["orange-500"]};

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px; /* Opcional: para cantos arredondados */
  }

  h3 {
    margin: 0;
  }

  p {
    max-width: 200px;
    margin: 0;
  }

  /* 
    TALVEZ SEJA UTIL
  
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
  
  
  */
`

export const SectionImg = styled.section`
  margin-bottom: 2rem;
`

//EspaçoFestas---------------------------------------------------------------------------------------------------------------------------------------------

export const EspacoFestas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;

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
    max-width: 250px;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding: 0.2rem 0.8rem;
    margin-bottom: 1rem;

    font-weight: bold;

    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme["white"]};
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
  margin-bottom: 1.5rem;

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
    max-width: 270px;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding: 0.2rem 0.7rem;
    margin-bottom: 1rem;

    font-weight: bold;

    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme["white"]};
  }
`

//MobileLastPage---------------------------------------------------------------------------------------------------------------------------------------------

export const MobileLastPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    max-width: 100%;
    height: 2.5rem;
    border-radius: 8px;
    align-items: center;
    padding: 0.2rem 0.7rem;
    margin-bottom: 1rem;
  }
`

export const ImgLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 1rem;

  p {
    text-align: center;
  }

  a {
    max-width: 100%;
    display: inline-block;
    padding: 0.6rem 1.2rem;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    margin-bottom: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 2rem;
    box-shadow: 0 4px #0056b3;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  h6 {
    font-size: 16px;

    text-align: center;
    margin-bottom: 2rem;
  }
`

//MobileLastPage---------------------------------------------------------------------------------------------------------------------------------------------
