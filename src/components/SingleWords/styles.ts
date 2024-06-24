import styled from "styled-components"

export const SingleWord = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 4rem;
  max-width: 250px;

  h3 {
    font-size: 20px;
    line-height: 20px;
    font-family: "Galada", cursive;
    color: #f87b07;
  }

  @media (min-width: 768px) {
    max-width: 400px;
    height: 100px;
    margin-bottom: 4rem;
    h3 {
      font-size: x-large;
    }
  }
`
