import styled from "styled-components"

export const ImageWithTextContainerSlide = styled.div`
  margin-bottom: 4rem;
`

export const ImageWithTextSlides = styled.div`
  background-color: ${(props) => props.theme["orange-500"]};
  max-width: 250px;
  margin: 0 auto 3rem auto;
  padding: 2rem;
  border-radius: 2rem;

  @media (min-width: 768px) {
    display: flex;
    //margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    width: 45%;
    max-width: none;
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

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-top: 1rem;
      max-width: 16rem;
      border-radius: 10px;
      border: none;
      padding: 0.3rem;
      background: ${(props) => props.theme["green-500"]};
      color: white;
      transition: background 0.3s ease, transform 0.3s ease;

      @media (min-width: 768px) {
        width: 20rem;
        padding: 0.5rem;
      }

      &:hover {
        background: ${(props) => props.theme["green-700"]};
        cursor: pointer;
        transform: scale(1.05);
      }

      strong {
        font-size: 1rem;
      }
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
