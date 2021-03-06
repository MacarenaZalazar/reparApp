import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  position: sticky;
  z-index: 99;
  height: 6.5rem;
  background-color: #0a122a;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;

    flex-direction: column;
  }
`;

export const NavBarDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
  position: relative;
  transition: 0.8s ease;

  @media screen and (max-width: 768px) {
    height: 100vh;

    position: absolute;
    top: 5rem;
    left: ${({ click }) => (click ? 0 : "-200%")};
    flex-direction: column;
    padding-top: 5rem;
    justify-content: flex-start;
    align-items: center;
    background-color: #0a122aff;
  }
`;

export const LogoDiv = styled.div`
  img {
    width: 10rem;
  }
`;

export const UserName = styled.div`
  font-weight: bold;

  .link {
    text-decoration: none;
    color: #f06449ff;
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.div`
  border-radius: 1rem;
  padding: 0.5rem 3rem;
  transition: 0.5s ease;
  background-color: #e7decdff;
  p {
    font-weight: bold;
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

export const IconMenu = styled.div`
  color: #f06449;
  display: none;

  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }
`;
