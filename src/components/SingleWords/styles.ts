import styled from "styled-components";

export const SingleWord = styled.div`
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
