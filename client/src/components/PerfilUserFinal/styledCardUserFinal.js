import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
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

export const WorksOrdersDiv = styled.div``;
export const WorksSolicited = styled.div`
  background-color: green;
  .link {
    background-color: black;
  }
`;
export const WorksFinished = styled.div`
  background-color: red;
  .link {
    background-color: black;
  }
`;
export const WorksAtention = styled.div`
  background-color: yellow;
  .link {
    background-color: black;
  }
`;
export const WorksProcess = styled.div`
  background-color: pink;
  .link {
    background-color: black;
  }
`;
