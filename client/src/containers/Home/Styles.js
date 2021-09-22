import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 10.75rem);
  background-color: #fbfaf8ff;
  padding: 0.5rem 0;

  .flexNewOrder {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link {
    padding: 1rem;
    margin: 0.5rem;
    height: 50%;
    border-radius: 50%;
    background-color: #de6b48;
    text-align: center;

    text-decoration: none;
  }
  .cardsDisplay {
    width: 75%;
    display: flex;
    flex-direction: column;
  }
`;
export const SinUser = styled.div`
  display: flex;
  padding: 4rem;
  h2 {
    text-align: center;
  }
  .cardsDisplay {
    width: 75%;
    display: flex;
    flex-direction: column;
  }
`;

export const HomeDiv = styled.div``;
