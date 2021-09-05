import styled from "styled-components";

export const StyledDiv = styled.div``;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    padding: 0.3rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: rgb(248, 248, 248);
    border-radius: 2rem;
    width: 20rem;
    border: 1px solid #194350;
    background-color: ${({ error }) => (error ? "#ff8882" : "")};
  }

  button {
  }
`;
