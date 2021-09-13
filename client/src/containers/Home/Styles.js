import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content:  center;
  flex-direction: row;
  background-color: #f9f6f4;

  .link {
    padding: 1rem;
    margin: 0.5rem;
    height: 50%;
    border-radius: 50%;
    background-color: #de6b48;
    text-align: center;

    text-decoration: none;
  }
  .cardsDisplay{
    width: 75%;
    display:flex;
    flex-direction: column;

  }
`;
export const SinUser = styled.div`
  display: flex;
  flex-direction:row;
  padding: 4rem;
  h2 {
    text-align: center;
  }
  .cardsDisplay{
    width: 75%;
    display:flex;
    flex-direction: column;

  }
`;
