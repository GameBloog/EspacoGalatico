import styled from "styled-components"

export const ImgLogo = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  h3 {
    color: white;
    margin-bottom: 1rem;
  }

  @media (min-width: 1360px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ButtonImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ButtonImg = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (min-width: 1360px) {
    width: 60px;
    height: 60px;
  }
`
