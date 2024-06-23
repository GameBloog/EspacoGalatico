import styled from "styled-components";

export const Buttons = styled.button`
  width: 280px;
  height: 3rem;
  border-radius: 10px;
  border: none;
  align-items: center;
  padding: 0.2rem;
  margin-bottom: 1rem;
  background: linear-gradient(270deg, #f87b07 0%, #ff8c00 100%);
  color: white;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(270deg, #ff8c00 0%, #f87b07 100%);
    cursor: pointer;
    transform: scale(1.05); /* Leve zoom */
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
    width: 350px;
    height: 3.5rem;
    font-size: 1.2rem;
  }
`
