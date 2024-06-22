import styled from "styled-components"

export const Container = styled.div`
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`

export const Header = styled.header`
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`

export const Section = styled.section`
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
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

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div {
      width: 200px;
      height: 50px;
    }

    h2 {
      font-size: 24px;
    }
  }

  @media (min-width: 1360px) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
    margin-left: 9rem;
    margin-bottom: 1rem;

    div {
      width: 200px;
      height: 50px;
    }

    h2 {
      font-size: 24px;
    }
  }
`

export const MobileHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const DesktopHomePage = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`

export const WhatIs = styled.div`
  max-width: 300px;
  margin-left: 1rem;

  h3 {
    max-width: 312px;
    color: white;
    text-align: start;
    font-size: larger;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 30px;
    line-height: 40px;
    font-family: "Galada", cursive;
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
    color: #f87b07;
  }

  @media (min-width: 768px) {
    max-width: 600px;
    margin-left: 0;

    h1 {
      font-size: 36px;
      line-height: 48px;
    }

    p {
      font-size: 1.1rem;
    }
  }
`

export const RoudendImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.4rem;
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      width: 300px;
      height: 300px;
    }
  }
`

export const Button = styled.button`
  width: 280px;
  height: 3rem;
  border-radius: 10px;
  border: none;
  align-items: center;
  padding: 0.2rem;
  margin-bottom: 1rem;
  background: linear-gradient(270deg, #f87b07 0%, #ff8c00 100%);
  color: white;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(270deg, #ff8c00 0%, #f87b07 100%);
    cursor: pointer;
    transform: scale(1.05); /* Leve zoom */
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
    width: 350px;
    height: 3.5rem;
    font-size: 1.2rem;
  }
`

export const CallToAction = styled.div`
  max-width: 312px;
  text-align: center;
  margin-bottom: 1.2rem;

  @media (min-width: 768px) {
    max-width: 600px;
    margin-bottom: 2rem;
  }
`
export const SingleWords = styled.div`
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;

  h3 {
    font-size: 20px;
    line-height: 20px;
    font-family: "Galada", cursive;
    color: #f87b07;
  }

  @media (min-width: 768px) {
    display: flex;
    max-width: 200px;
    max-height: 100px;
    margin-bottom: 2rem;
  }
`


export const DesktopImageText = styled.div`
  @media (min-width: 1360px) {
    display: flex;
    justify-content: space-between;
    margin-left: 2.5rem;
    margin-top: 0rem;
    margin-right: 2rem;

    gap: 1.5rem;
  }
`

export const ImageWithTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1360px) {
    display: block;
    flex-direction: row;
    height: 100vh;
  }
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
    border-radius: 5px;
  }

  h3 {
    margin: 0;
    color: white;
  }

  p {
    max-width: 200px;
    margin: 0;
  }

  @media (min-width: 1360px) {
    max-width: 500px;
    height: 40rem;
    padding: 3rem;

    h3 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      max-width: 200px;
      font-size: 1rem;
    }
  }
`

export const BoxShadow = styled.div`
  box-shadow: 0px -3px 6px #f87b07;

  @media (min-width: 768px) {
    box-shadow: -4px 0px 5px #f87b07;
  }
`

export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 120px;
    height: 120px;

    @media (min-width: 1360px) {
      width: 150px;
      height: 150px;
    }
  }
`

export const MidleDiv = styled.div`
  @media (min-width: 1360px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 0.2rem;

    gap: 3rem;
  }
`

export const SectionImg = styled.section`
  margin-bottom: 1.5rem;
`

export const EspacoFestas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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

  @media (min-width: 1360px) {
    display: block;
    flex-direction: row;
    gap: 2rem;
    padding: 3rem;

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
      max-width: 18rem;
    }
  }
`

export const ImgEspacofestas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    display: flex;
  }

  img {
    max-width: 226px;
    max-height: 291px;

    @media (min-width: 768px) {
      max-width: 550px;
    }
  }
`

export const Reserve = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-top: 1.5rem;
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

  @media (min-width: 1360px) {
    flex-direction: column;
    gap: 2rem;

    h3 {
      font-size: 36px;
    }

    p {
      font-size: 1.1rem;
      width: 16rem;
    }
  }
`

export const MobileLastPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 1360px) {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }
`

export const DesktopLastPage = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    text-align: center;
    margin-bottom: 1.2rem;
    color: white;
    text-align: start;
    font-size: larger;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h3 {
      text-align: center;
    }
  }

  @media (min-width: 1360px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: center;
    gap: 1rem;
  }
`

export const JustForStyle = styled.div`
  margin-top: 2.5rem;
`

export const WhatIsLastPage = styled.div`
  max-width: 300px;

  h3 {
    max-width: 312px;
    text-align: center;
    margin-bottom: 1.2rem;
    color: white;
    text-align: start;
    font-size: larger;
  }

  h1 {
    font-size: 30px;
    line-height: 40px;
    font-family: "Galada", cursive;
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
    color: #f87b07;
  }

  @media (min-width: 768px) {
    max-width: 600px;

    h3 {
      max-width: 400px;
      text-align: center;
    }

    h1 {
      font-size: 36px;
      text-align: center;
      line-height: 48px;
    }
  }

  @media (min-width: 1360px) {
    max-width: 650px;

    h1 {
      font-size: 36px;
      line-height: 48px;
    }

    p {
      font-size: 1.1rem;
    }
  }
`

export const ImgLogos = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  h3 {
    color: white;
    margin-bottom: 1rem;
  }

  @media (min-width: 1360px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ButtonImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ButtonImg = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (min-width: 1360px) {
    width: 60px;
    height: 60px;
  }
`

export const BotaoFixo = styled.a`
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 1000;

  img {
    width: 7.5rem;
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

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: black;
  justify-content: center;
  align-items: center;

  p {
    width: 90%;
    text-align: center;
    color: white;
  }

  a {
    max-width: 90%;
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
    color: white;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    div {
      padding-top: 0.5rem;
    }

    p,
    h6 {
      font-size: 1rem;
    }

    a {
      font-size: 1.2rem;
    }
  }
`
