import styled from "styled-components";

export const Reserve = styled.div`
  text-align: center;
  gap: 1rem;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.8rem;
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
