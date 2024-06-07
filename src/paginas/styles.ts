import styled from "styled-components"

export const Container = styled.body`
  margin-top: 2rem;
`

export const Header = styled.header`
  margin-bottom: 1.5rem;
`

export const Section = styled.section`
  margin-bottom: 3rem;
`

//MobileHomePage---------------------------------------------------------------------------------------------------------------------------------------------

export const MobileHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const Button = styled.button`
  width: 250px;
  height: 3rem;
  border-radius: 10px;
  border: none;
  align-items: center;
  padding: 0.2rem;
  margin-bottom: 1rem;
  background: linear-gradient(270deg, #f87b07 0%, #ff8c00 100%);
  color: white;
`
export const WhatIs = styled.div`
  max-width: 300;

  h1 {
    font-size: 30px;
    line-height: 40px;
    font-family: "Galada", cursive;
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
    color: #f87b07;
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
    color: white;
  }

  h2 {
    color: white;
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
  /* background-color: ${(props) => props.theme["green-500"]}; */
  border-radius: 1rem;

  h3 {
    font-size: 30px;
    font-family: "Galada", cursive;
    text-align: center;
    width: 19rem;
    margin: 8px;
    color: #f87b07;
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
  }

  p {
    display: flex;
    justify-content: center;
    width: 18rem;
    text-align: center;
    line-height: 25px;
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

export const Reserve = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-bottom: 3rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 30px;
    font-family: "Galada", cursive;
    text-align: center;
    width: 19rem;
    margin: 8px;
    color: #f87b07;
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
  }

  p {
    display: flex;
    justify-content: center;
    width: 18rem;
    text-align: center;
    line-height: 25px;
  }
`

//MobileLastPage---------------------------------------------------------------------------------------------------------------------------------------------

export const MobileLastPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  h3 {
    color: white;
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
