import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 10.75rem);
  background-color: #fbfaf8ff;
  padding: 0.5rem 0;
  gap: 2rem;

  .flexHome {
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

export const HomeDiv = styled.div``;
