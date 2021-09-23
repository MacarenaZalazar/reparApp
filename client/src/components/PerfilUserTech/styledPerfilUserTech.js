import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 10.75rem);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e7decdff;
`;
export const ProfileDiv = styled.div``;

export const CardUserTech = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
 
  gap: 0.8rem;

  .left
`;

export const ButtonsDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      .icon {
        transform: translateX(-2rem);
      }
      p {
        opacity: 100;
      }
    }

    p {
      transition: 1s ease;
      color: #0a122aff;
      opacity: 0;
      font-size: 1.5rem;
    }
    .icon {
      transition: 1s ease;
      bottom: 0;
      left: 0;
      color: #0a122aff;
      background-color: #f06449ff;
      font-size: 5rem;
      border-radius: 50%;
      padding: 1rem;
      transform: translateX(+2rem);
    }
  }
`;

export const ItemCard = styled.div`
  p {
    font-size: 1.2rem;
    background-color: #f06449ff;
    color: #0a122aff;
    padding: 0 2rem;
  }
`;
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
export const WorksAwait = styled.div`
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
