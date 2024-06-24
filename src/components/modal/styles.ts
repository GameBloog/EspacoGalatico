import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContainer = styled.div`
  position: relative;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`
