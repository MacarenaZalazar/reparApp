import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 10.75rem);
  background-color: #fbfaf8ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const WorkOrderDiv = styled.div`
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
`;

export const ImgWork = styled.div`
  width: 60%;
  img {
    width: 40rem;
    height: 30rem;
    border: 0.3rem solid #f06449ff;
    border-radius: 1rem;
  }
`;
export const ItemWork = styled.div`
  width: 100%;
  p {
    font-size: 1.2rem;
    background-color: #f06449ff;
    color: #0a122aff;
    padding: 0 2rem;
  }
`;

export const ReportedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

export const UserTechDiv = styled.div`
  padding: 3rem 1rem;
  border-radius: 1rem;
  width: 50%;
  color: #e7decdff;
  background-color: #0a122aff;

  .flexButton {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }
`;

export const ItemUserTech = styled.div`
  p {
    font-size: 1.2rem;
    background-color: #f06449ff;
    color: #0a122aff;
    padding: 0 2rem;
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

export const Login = styled.div`
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: 1s ease;
    transform: translateY(${(props) => (props.flag ? "-1rem" : "0")});
  }
  .icon {
    color: #0a122aff;
    background-color: #f06449ff;
    font-size: 5rem;
    border-radius: 30%;
    padding: 1rem;
  }

  .enter {
    transition: 1s ease;
    opacity: ${(props) => (props.flag ? "100" : "0")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .enterLink {
      color: black;
    }
  }
`;

