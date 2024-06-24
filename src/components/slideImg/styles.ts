import styled from "styled-components"

export const Images = styled.div`
  img {
    width: 100%;
    aspect-ratio: 1/1;
    height: auto;

    @media (min-width: 1024px) {
      max-width: 30rem;
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: red;
  z-index: 1002;
`

export const ImageModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 90vw;
    height: auto;

    @media (min-width: 1025px) {
      max-width: 30rem;
    }
  }
`

export const ModalContent = styled.div`
  background: #004d36;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: auto;
  z-index: 1001;

  @media (min-width: 1025px) {
    width: 45rem;
  }
`
