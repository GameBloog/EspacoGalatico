import styled from "styled-components";

export const EndPage = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: black;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 1rem;
    width: 90%;
    text-align: center;
    color: white;
  }

  a {
    max-width: 90%;
    display: inline-block;
    padding: 0.6rem 1.2rem;
    font-size: 16px;
    cursor: pointer;
    text-align: center;

    text-decoration: none;
    margin-bottom: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 2rem;
    box-shadow: 0 4px #0056b3;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  h6 {
    font-size: 16px;
    text-align: center;
    margin-bottom: 2rem;
    color: white;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    div {
      padding-top: 0.5rem;
    }
    p {
      margin-top: 0;
    }

    p,
    h6 {
      font-size: 1rem;
    }

    a {
      font-size: 1.2rem;
    }
  }
`
