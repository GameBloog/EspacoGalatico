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
export const TitleText = styled.h2`
  font-size: 2rem;
  font-family: "Galada", cursive;
  color: #f87b07;
  margin-left: 3rem;
  text-align: left;
  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
`

export const DescriptionText = styled.p`
  font-size: 1rem;
  margin-left: 2rem;
  font-optical-sizing: auto;
`
