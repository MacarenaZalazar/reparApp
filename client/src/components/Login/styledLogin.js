import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 11.75rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fbfaf8;
  gap: 2rem;
`;

export const LoginDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
  gap: 2rem;
  border-radius: 1rem;
  /* box-shadow: #f06449ff 0px 8px 34px -25px; */
  span.register {
    cursor: pointer;
    :hover {
      font-weight: bold;
    }
  }
`;

export const OptionsDiv = styled.div`
  justify-self: right;
`;
export const TitleDiv = styled.div``;
export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .icon {
    color: #0a122aff;
    font-size: 3.5rem;
  }
  input {
    width: 100%;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #0a122aff;
    padding: 0.3rem;
  }
`;

export const ButtonDiv = styled.div`
  button {
    font-weight: bold;
    border-radius: 1rem;
    border: 1px solid #0a122aff;
    padding: 0.5rem 3rem;
    transition: 0.5s ease;
    text-decoration: none;
    color: #000003;

    :hover {
      transform: scale(1.1);
      cursor: pointer;
      background-color: #f06449;
    }
  }
`;
