import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: #0a122aff;
  border-radius: 1.5rem;

  &:hover {
    .front {
      transform: translateX(-400%);
      p {
        opacity: 0;
      }
    }
    p,
    select {
      opacity: 100;
      color: #e7decdff;
    }
  }
  .icon {
    transition: 1s ease;

    color: #0a122aff;
    background-color: #f06449ff;
    font-size: 2.5rem;
    border-radius: 50%;
    padding: 0.2rem;
  }
  .front {
    transition: 1s ease;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    top: 50;
    left: 50;
    p {
      transition: 0.5s ease;
      opacity: 100;
      color: #f06449ff;
      font-weight: bold;
    }
  }
  .flexFilter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }
`;

export const ContentFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  p {
    width: 100%;
    transition: 0.5s ease;
    color: #0a122aff;
    opacity: 0;
    font-size: 1.2rem;
  }
  select {
    transition: 1s ease;
    opacity: 0;
    width: 15rem;
    font-size: 1.2rem;
    color: #e7decdff;
    background-color: #0a122aff;
    padding: 0.3rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
  }
  option {
    font-size: 1.2rem;
  }

  .flexSelect {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }
`;
