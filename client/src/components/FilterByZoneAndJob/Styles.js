import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    .icon {
      transform: translate(200%, 80%);
    }
    p,
    select {
      opacity: 100;
    }
  }
  .icon {
    transition: 1s ease;

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
    gap: 1rem;
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
    width: 15rem;
    transition: 1s ease;
    opacity: 0;
    font-size: 1.2rem;
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
