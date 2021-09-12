import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
export const SinUser = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 4rem;
  h2 {
    text-align: center;
  }
`;
