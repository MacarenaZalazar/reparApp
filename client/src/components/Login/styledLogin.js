import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 4.4rem);
  padding-top: 6.5rem;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const LoginDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0a122aff;
  color: #e7decdff;
  padding: 5rem 3rem;
  gap: 3rem;
  border-radius: 1rem;
  /* box-shadow: #f06449ff 0px 8px 34px -25px; */
  span.register {
    cursor: pointer;
    :hover {
      font-weight: bold;
    }
  }
`;

export const TitleDiv = styled.div`
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
`;
export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .icon {
    color: #f06449ff;
    font-size: 3.5rem;
  }
  input {
    color: #e7decdff;
    background-color: #0a122aff;
    padding: 0.3rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: ${({ error }) => (error ? "rgb(248, 248, 248)" : "#e7decdff")};

    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
    border-bottom: ${({ error }) =>
      error ? " 1px solid #f06449ff" : "1px solid #e7decdff"};
  }
  select {
    color: #e7decdff;
    background-color: #0a122aff;
    width: 25rem;
    padding: 0.3rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
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
    background-color: #e7decdff;

    :hover {
      transform: scale(1.1);
      cursor: pointer;
      background-color: #f06449;
    }
  }
`;

export const LinksDiv = styled.div`
  width: 15.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      .icon {
        transform: translateX(-2rem);
      }
      p {
        opacity: 100;
      }
    }

    p {
      transition: 1s ease;
      color: #0a122aff;
      opacity: 0;
      font-size: 1.5rem;
    }
    .icon {
      transition: 1s ease;
      bottom: 0;
      left: 0;
      color: #0a122aff;
      background-color: #f06449ff;
      font-size: 5rem;
      border-radius: 50%;
      padding: 1rem;
      transform: translateX(+2rem);
    }
  }
`;

export const GoogleDiv = styled.div`
  width: 15.5rem;
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.4rem;
    transition: 1s ease;
    transform: translateY(${(props) => (props.flag ? "-1rem" : "0")});
  }
  .icon {
    color: #0a122aff;
    background-color: #f06449ff;
    font-size: 5rem;
    border-radius: 30%;
    padding: 1rem;
  }

  .enter {
    transition: 1s ease;
    opacity: ${(props) => (props.flag ? "100" : "0")};
    display: ${(props) => (props.flag ? "block" : "none")};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
