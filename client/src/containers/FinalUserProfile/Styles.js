import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 10.9rem);

  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-top: 1.5rem;
    flex-direction: column;
    min-height: calc(100vh - 15.7rem);
  }
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
        @media screen and (max-width: 768px) {
          transform: translateY(-2rem);
        }
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
      @media screen and (max-width: 768px) {
        max-width: 1rem;
      }
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
    @media screen and (max-width: 768px) {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const ContainerDiv = styled.div`
  heigh: 100%;
`;
