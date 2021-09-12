import styled from "styled-components";

export const StyledDiv = styled.div`
  height: calc(100vh - 15rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  span {
    padding: 10px 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Input = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

  label {
    width: 10rem;
    text-align: end;
  }

  select {
    width: 20rem;
    padding: 0.3rem;
    border-radius: 2rem;
    text-align: center;
    border: 1px solid #194350;
  }
`;
