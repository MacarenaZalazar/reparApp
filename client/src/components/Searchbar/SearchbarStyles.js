import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const SearchBarDiv = styled.div`
  width: fit-content;
  color: rgb(248, 248, 248);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #194350;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 2rem;
`;

export const ItemDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  select {
    min-width: 50%;
  }

  .link {
    text-decoration: none;
    color: rgb(248, 248, 248);
    border-radius: 1rem;
    border: 1px solid;
    padding: 1rem 2rem;
    transition: 0.6s ease;
    p {
      font-weight: bold;
    }

    :hover {
      background-color: #ff8882;
    }
  }
`;
