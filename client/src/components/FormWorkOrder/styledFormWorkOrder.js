import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
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
  }
`;

export const Form = styled.div`
  .title {
    position: relative;
    text-transform: uppercase;
    text-align: center;
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
  padding: 5rem 1.3rem;
  span {
    padding: 10px 0;
  }

  .flexWorks {
    display: flex;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
export const Input = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  input {
    color: #e7decdff;
    background-color: #0a122aff;
    padding: 0.3rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: ${({ error }) => (error ? "rgb(248, 248, 248)" : "#e7decdff")};
    min-width: 15rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
    border-bottom: ${({ error }) =>
      error ? " 1px solid #f06449ff" : "1px solid #e7decdff"};

    @media screen and (max-width: 768px) {
      max-width: 100%;
      min-width: 15rem;
    }
  }

  label {
    width: 10rem;
    text-align: end;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  select {
    color: #e7decdff;
    background-color: #0a122aff;
    width: 15rem;
    padding: 0.3rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      min-width: 15rem;
    }
  }
  textarea {
    color: #e7decdff;
    background-color: #0a122aff;
    padding: 0.3rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: ${({ error }) => (error ? "rgb(248, 248, 248)" : "#e7decdff")};
    width: 15rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
    border-bottom: ${({ error }) =>
      error ? " 1px solid #f06449ff" : "1px solid #e7decdff"};
  }

  .flexZonesNew {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
