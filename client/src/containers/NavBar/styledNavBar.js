import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: #0a122a;
  padding: 0.5rem;
`;

export const NavBarDiv = styled.div`
  color: #d2d0ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
