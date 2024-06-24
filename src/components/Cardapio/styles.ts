import styled from "styled-components"

export const ImageWithTextContainerSlide = styled.div``

export const ImageWithTextSlides = styled.div`
  background-color: ${(props) => props.theme["orange-500"]};
  /* max-width: 250px; */
  margin: 0 auto 3rem auto;
  padding: 2rem;
  border-radius: 2rem;

  @media (min-width: 1360px) {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }

  h3 {
    margin: 0;
    color: white;
    margin-top: 1.2rem;
    text-align: center;
  }

  p {
    max-width: 800px;
    margin: 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.8rem;
    width: 200px;
    border-radius: 10px;
    border: none;
    align-items: center;
    padding: 0.2rem;
    background: ${(props) => props.theme["green-500"]};
    color: white;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
      background: ${(props) => props.theme["green-700"]};
      cursor: pointer;
      transform: scale(1.05); /* Leve zoom */
    }
  }
`

export const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`
