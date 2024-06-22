import styled from "styled-components"

export const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30rem;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 3px;
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
    width: 30rem;
  }
`
