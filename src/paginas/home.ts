import styled from "styled-components"

export const Container = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

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
  margin-bottom: 1rem;
`

export const Section = styled.section`
  margin-bottom: 1rem;
`

export const RotasDeNav = styled.div`
  display: flex;
  justify-content: center;

  div {
    border: 1px solid red;
    border-radius: 7px;
    margin-top: 1rem;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    width: 101px;
    height: 29px;
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
