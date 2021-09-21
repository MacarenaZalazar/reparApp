import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 10.75rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 
  background-position: center left;
  background-size: 28%;
  background-repeat: no-repeat; */
`;

export const ProfileDiv = styled.div`
  height: 100%;
`;
export const ButtonsDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .link {
    transition: 0.2s ease;
    transform: translateX(${(back) => (back ? "5rem" : "0rem")});

    p {
      color: #0a122aff;
    }
    .icon {
      bottom: 0;
      left: 0;

      color: #0a122aff;
      background-color: #f06449ff;
      font-size: 5rem;
      border-radius: 50%;
      padding: 1rem;
    }
  }
`;

export const ContainerDiv = styled.div`
  heigh: 100%;
`;
