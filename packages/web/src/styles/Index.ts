import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      border-radius: 10px;
      padding: 1rem;
      margin: 2rem 0;
      background: none;
      border: none;

      font-size: 1.5rem;
      cursor: pointer;
      transition: font-weight 0.2s;
    }
  }
`;
