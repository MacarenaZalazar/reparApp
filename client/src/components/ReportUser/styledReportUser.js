import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #0a122aff;
  color: #e7decdff;
  padding: 1rem;
  border-radius: 1rem;
`;

export const ItemDiv = styled.div`
  select {
    color: #e7decdff;
    background-color: #0a122aff;

    padding: 0.3rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
  }
`;

export const Button = styled.button`
  border-radius: 1rem;
  padding: 0.3rem 1.5rem;
  transition: 0.5s ease;
  background-color: #e7decdff;
  border: none;
  font-weight: bold;
  p {
    color: #0a122aff;
    display: inline;
    width: 100%;
  }

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #f06449;
  }
`;
