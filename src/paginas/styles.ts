import styled from "styled-components"

export const Container = styled.div`
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`

export const Section = styled.section`
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    margin-bottom: 4rem;
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

export const DesktopImageText = styled.div`
  @media (min-width: 1360px) {
    /* display: flex; */
    justify-content: space-between;
    margin-left: 2.5rem;
    margin-top: 0rem;
    margin-right: 2rem;

    gap: 1.5rem;
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
