import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  .cardsContainer {
    margin: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;
    /* aling-items: center; */
    @media (max-width: 610px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 410px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
