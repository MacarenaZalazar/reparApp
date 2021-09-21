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
    .icon {
      transform: translateX(-50%);
    }
    p,
    select {
      opacity: 100;
      color: #e7decdff;
    }
  }
  .icon {
    transition: 1s ease;
    transform: translateX(400%);
    color: #0a122aff;
    background-color: #f06449ff;
    font-size: 5rem;
    border-radius: 50%;
    padding: 1rem;
  }
  .flexFilter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
  }
`;

export const ContentFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  p {
    transition: 1s ease;
    color: #0a122aff;
    opacity: 0;
    font-size: 1.5rem;
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
  }
`;
