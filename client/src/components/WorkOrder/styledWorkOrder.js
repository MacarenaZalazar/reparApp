import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #0a122aff;
  gap: 2rem;
  padding: 0.7rem 5rem;
  color: #e7decdff;
`;

export const ImgDiv = styled.div`
  img {
    width: 13rem;
    height: 11rem;
    border-radius: 50%;
    border: 0.3rem solid #f06449ff;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemCard = styled.div`
  width: 100%;
  p {
    font-size: 1.2rem;
    background-color: #f06449ff;
    color: #0a122aff;
    padding: 0 1rem;
  }
  h4 {
    font-size: 1.5rem;
  }

  .pDesc {
    text-align: start;
    background-color: #0a122aff;
    color: #e7decdff;
  }
`;

export const Button = styled.button`
  padding: 0.2rem 1.5rem;
  border-radius: 1rem;
  background-color: #e7decdff;
  border: none;
  font-family: "Montserrat", sans-serif;
  transition: 0.5s ease;
  font-weight: bold;
  color: #0a122aff;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #f06449;
  }
`;
