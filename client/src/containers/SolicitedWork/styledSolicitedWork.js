import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 10.9rem);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e7decdff;
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .title {
    position: relative;
    text-transform: uppercase;
    h4 {
      &:after {
        position: absolute;
        top: 110%;
        left: 0;
        width: 100%;
        height: 0.5rem;
        background-color: #f06449ff;
        content: " ";
      }
    }
  }
  .flexContent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .flexWorkSolicited {
    display: flex;
    gap: 3rem;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgDiv = styled.div`
  img {
    width: 20rem;
    height: 20rem;
    border: 0.3rem solid #f06449ff;
  }
`;

export const ItemCard = styled.div`
  p {
    font-size: 1.2rem;
    background-color: #f06449ff;
    color: #0a122aff;
    padding: 0 2rem;
  }
  .descriptionP {
    background-color: #0a122aff;
    color: #e7decdff;
    padding: 0;
  }
`;
export const WorkSolicited = styled.div`
  background-color: #0a122aff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 5rem 1.3rem;
  border-radius: 1rem;
`;
export const ContentWork = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const UserOwner = styled.div`
  background-color: #0a122aff;
  .flexUserOwner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  padding: 5rem 1.3rem;
  border-radius: 1rem;
`;
export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.2rem 1.5rem;
  border-radius: 1rem;
  background-color: #f06449ff;
  border: none;
  font-family: "Montserrat", sans-serif;
  transition: 0.5s ease;
  font-weight: bold;
  color: #0a122aff;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #0a122aff;
    color: #e7decdff;
  }
`;
