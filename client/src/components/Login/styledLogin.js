import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f6f4;
`;

export const LoginDiv = styled.div`
  background-color: white;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  border-radius: 3rem;
  box-shadow: rgba(181, 129, 108, 0.8) 0px 8px 34px -25px;
  span.register{
    cursor: pointer;
    :hover{
      font-weight: bold;
    }
  }
`;

export const TitleDiv = styled.div``;
export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  .icon {
    font-size: 3rem;
  }
  input {
    border: 1px solid;
    padding: 1rem;
    border-radius: 3px;
    background-color: rgb(248, 248, 248);
  }
`;

export const ButtonDiv = styled.div`
  .link {
    text-decoration: none;
    font-weight: bold;
    color: black;
    border-radius: 1rem;
    border: 1px solid black;
    padding: 1rem 2rem;
    transition: 0.6s ease;
    :hover {
      background-color: #ff8882;
      cursor: pointer;
    }
  }
`;
