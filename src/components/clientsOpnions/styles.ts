import styled from "styled-components"

export const Reserve = styled.div`
  gap: 1rem;
  margin-top: 7rem;
  margin-bottom: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  /* max-width: 20vw; */

  h3 {
    font-size: 1.8rem;
    font-family: "Galada", cursive;
    text-align: center;
    width: 19rem;
    margin: 8px;
    color: #f87b07;
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
  }

  div {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
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
