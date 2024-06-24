import styled from "styled-components"

export const WhatIs = styled.div`
  max-width: 300px;
  margin-left: 1rem;
  padding: 0.8rem;

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
    padding: none;

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
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      width: 300px;
      height: 300px;
    }
  }
`
