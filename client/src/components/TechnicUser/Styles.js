import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a122aff;
  gap: 2rem;
  padding: 0rem 5rem;

  color: #e7decdff;

  .infoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    .name {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #ced4da;
      margin: 5px;
    }
    label {
      font-size: 15px;
    }
  }

  ul {
    font-size: 15px;
    list-style: none;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgDiv = styled.div`
  img {
    width: 13rem;
    height: 11rem;
    border-radius: 50%;
    border: 0.3rem solid #f06449ff;
  }
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

  .flexJobTypes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .jobp {
      background-color: #0a122aff;
      color: #e7decdff;
    }
  }
`;

export const Button = styled.button`
  padding: 0.5rem 3rem;
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
