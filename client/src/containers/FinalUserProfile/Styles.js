import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 10.75rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const ContainerDiv = styled.div`
  heigh: 100%;
`;
