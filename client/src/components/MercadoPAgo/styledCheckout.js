import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 10.75rem);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e7decdff;
`;

export const ContentDiv = styled.div`
  background-color: #0a122aff;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    select {
      color: #e7decdff;
      background-color: #0a122aff;
      width: 5rem;
      padding: 0.3rem;
      outline: 0;
      border: 0;
      border-bottom: 1px solid #e7decdff;
      @media screen and (max-width: 768px) {
        max-width: 100%;
        min-width: 15rem;
      }
    }
  }

  .title {
    position: relative;
    text-transform: uppercase;
    text-align: center;
    h4 {
      &:after {
        position: absolute;
        top: 110%;
        left: 0;
        width: 100%;
        height: 0.5rem;
        background-color: #f06449ff;
        content: " ";
      }
    }
  }
`;

export const Pago = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  p {
    background-color: #f06449ff;
    padding: 0.2rem;
  }
`;
