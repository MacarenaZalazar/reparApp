import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 4.4rem);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  @media screen and (max-width: 768px) {
    padding: 0rem 2rem;
  }
`;

export const Form = styled.div`
  .title {
    position: relative;
    text-transform: uppercase;
    h4 {
      &:after {
        position: absolute;
        top: 110%;
        left: 0;
        width: 100%;
        height: 0.5rem;
        background-color: #f06449ff;
        content: " ";
      }
    }
  }

  color: #e7decdff;
  background-color: #0a122aff;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 5rem 3rem;
  span {
    padding: 10px 0;
  }
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  input,
  textarea {
    color: #e7decdff;
    background-color: #0a122aff;
    padding: 0.3rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: ${({ error }) => (error ? "rgb(248, 248, 248)" : "#e7decdff")};
    width: 40rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
    border-bottom: ${({ error }) =>
      error ? " 1px solid #f06449ff" : "1px solid #e7decdff"};
  }

  label {
    width: 7rem;
    text-align: end;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
      background-color: #f06449ff;
      color: #0a122aff;
      width: 100%;
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  padding: 0.5rem 3rem;
  border-radius: 1rem;
  background-color: #e7decdff;
  border: none;
  font-family: "Montserrat", sans-serif;
  transition: 0.5s ease;

  p {
    font-weight: bold;
    color: #0a122aff;
    display: inline;
    width: 100%;
  }

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #f06449;
  }
`;
