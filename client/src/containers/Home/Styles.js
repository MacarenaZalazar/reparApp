import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: #fbfaf8ff;

  padding: 0.5rem 0;
  gap: 2rem 0;

  .flexHome {
    padding-top: 5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }

  .cardsDisplay {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const SinUser = styled.div`
  display: flex;
  width: 100%;

  h2 {
    text-align: center;
  }
  .cardsDisplay {
    display: flex;
    flex-direction: column;
  }
`;

export const HomeDiv = styled.div`
  padding-top: 5rem;
`;
