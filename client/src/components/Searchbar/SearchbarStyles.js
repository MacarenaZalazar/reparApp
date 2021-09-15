import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const SearchBarDiv = styled.div`
  width: 100%;
  width: fit-content;
  color: rgb(248, 248, 248);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a122a;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 2rem;
`;

export const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  p {
    display: inline;
  }
  select {
    text-align: center;
    width: 100%;
  }
  option {
    font-size: 1.2rem;
  }

  .link {
    border-radius: 1rem;
    padding: 0.5rem 3rem;
    color: #000003;
    background-color: #fbfaf8;
    transition: 0.5s ease;
    text-decoration: none;
    p {
      font-weight: bold;
      color: #000003;
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
