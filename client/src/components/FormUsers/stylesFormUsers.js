import styled from "styled-components";

export const StyledDiv = styled.div``;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    border: none;
    padding: 0.6rem;
    font-family: "Montserrat", sans-serif;
    color: rgb(248, 248, 248);
    background-color: #194350;
    cursor: pointer;
    border-radius: 1rem;
    transition: 0.5s ease;

    :hover {
      background-color: #ff8882;
    }
  }
`;
export const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    padding: 0.3rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: ${({ error }) => (error ? "rgb(248, 248, 248)" : "#194350")};
    border-radius: 2rem;
    width: 20rem;
    border: 1px solid #194350;
    background-color: ${({ error }) => (error ? "#ff8882" : "")};
    outline: none;
  }
`;
