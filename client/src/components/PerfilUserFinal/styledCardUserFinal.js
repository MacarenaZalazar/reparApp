import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 10.9rem);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  color: #e7decdff;
`;
export const CardDiv = styled.div`
  background-color: #0a122aff;
  padding: 3rem 2rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;
export const ImgDiv = styled.div`
  img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    border: 0.3rem solid #f06449ff;
  }
`;

export const ContentCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ItemCard = styled.div`
  p {
    font-size: 1.2rem;
    background-color: #f06449ff;
    color: #0a122aff;
    padding: 0 2rem;
  }
`;

export const WorksOrdersDiv = styled.div`
  background-color: #0a122aff;
  padding: 1rem;
  h3 {
    font-size: 1.5rem;
    text-align: center;
    padding: 0.3rem;
  }

  .title {
    padding: 0.3rem;
    background-color: #f06449ff;
    p {
      color: #0a122aff;
    }
  }

  .flexBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3rem;

    p {
      font-size: 1.1rem;
    }
  }

  .link {
    padding: 0.5rem;
  }

  .work {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      transition: 1s ease;
      color: #0a122aff;
      opacity: 100;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .icon {
      transition: 1s ease;
      color: #0a122aff;
      background-color: #f06449ff;
      font-size: 5rem;
      border-radius: 50%;
      padding: 1.5rem;
    }
  }
`;
export const WorksSolicited = styled.div`
  background-color: #0a122aff;
`;

export const WorksFinished = styled.div`
  background-color: #0a122aff;
`;
export const WorksAtention = styled.div`
  background-color: #0a122aff;
`;
export const WorksProcess = styled.div`
  background-color: #0a122aff;
`;

export const Button = styled.div`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  transition: 0.5s ease;
  background-color: #e7decdff;
  p {
    font-weight: bold;
    color: #0a122aff;
    font-size: 1.2rem;
    width: 100%;
  }

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #f06449;
  }
`;
