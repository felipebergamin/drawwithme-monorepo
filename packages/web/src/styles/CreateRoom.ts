import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  main {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    label {
      font-size: 0.9rem;
    }

    input {
      border: none;
      padding: 1em;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      transition: all 0.5s ease-in-out;

      border-radius: 20px;
      background: #dddddd;
      box-shadow: inset 3px 3px 6px #bcbcbc, inset -3px -3px 6px #fefefe;

      &:focus {
        box-shadow: inset 1px 1px 2px #bcbcbc, inset -1px -1px 2px #fefefe;
      }
    }

    button.create-room {
      width: 90%;
      align-self: center;
      cursor: pointer;
      border: none;
      transition: 2s;
      padding: 1rem;

      font-weight: bold;
      font-size: 1.2rem;

      border-radius: 10px;
      background: linear-gradient(145deg, #ececec, #c7c7c7);
      box-shadow: 6px 6px 12px #bcbcbc, -6px -6px 12px #fefefe;

      &:disabled {
        box-shadow: none;
        background: none;
      }
    }
  }
`;
