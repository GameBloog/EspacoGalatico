import styled from "styled-components"

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
  h3 {
    text-align: center;
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
  margin-top: 2rem;
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
