import React from "react"
import { Close, Container, Image, ModalContainer } from "./styles"

interface ModalProps {
  imageUrl: string
  closeModal: () => void
}

export const Modal: React.FC<ModalProps> = ({ imageUrl, closeModal }) => {
  return (
    <Container className="modal" onClick={closeModal}>
      <ModalContainer
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <Close className="close" onClick={closeModal}>
          &times;
        </Close>
        <Image src={imageUrl} alt="Modal" />
      </ModalContainer>
    </Container>
  )
}
