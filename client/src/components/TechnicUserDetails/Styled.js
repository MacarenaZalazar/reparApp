import styled from "styled-components";

export const ReportedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .icon {
    color: #0a122aff;
    background-color: #f06449ff;
    font-size: 5rem;
    border-radius: 30%;
    padding: 1rem;
  }
  .content {
    transition: 1s ease;
    transform: translateY(${(props) => (props.flag ? "-1rem" : "0")});
  }

  .reported {
    transition: 1s ease;
    opacity: ${(props) => (props.flag ? "100" : "0")};
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 10.75rem);
  background-color: #fbfaf8ff;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 2rem 2rem;
  }
`;
export const UserTechDiv = styled.div`
  width: 100%;
  color: #e7decdff;
  background-color: #0a122aff;
  padding: 3rem 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .items {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgTech = styled.div`
  width: 60%;
  img {
    width: 40rem;
    height: 30rem;
    border: 0.3rem solid #f06449ff;
    border-radius: 1rem;
    @media screen and (max-width: 768px) {
      width: 20rem;
      height: 20rem;
    }
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

export const ItemTech = styled.div`
  width: 100%;
  p {
    font-size: 1.2rem;
    background-color: #f06449ff;
    color: #0a122aff;
    padding: 0 2rem;
  }
`;

export const ItemInfo = styled.div`
  p {
    font-size: 1.2rem;
    background-color: #f06449ff;
    color: #0a122aff;
    padding: 0 2rem;
  }
`;

export const UserInfoDiv = styled.div`
  padding: 3rem 1rem;
  border-radius: 1rem;
  width: 100%;
  color: #e7decdff;
  background-color: #0a122aff;

  .flexButton {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }
`;
