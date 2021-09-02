import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(248, 248, 248);
`;

export const LoginDiv = styled.div`
  border: 1px solid #194350;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  border-radius: 3rem;
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
