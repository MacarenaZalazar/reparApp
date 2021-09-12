import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: #de6b48;
  width: 100%;
  box-shadow: 0 16px 24px -18px rgba(181, 129, 108, 0.5);
`;

export const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  span {
    font-size: 14px;
  }
  a {
    text-decoration: none;
  }
  .link {
    color: black;
  }
  .navButtons {
    margin-right: 50px;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    margin: 10px;
    padding: 5px;
    width: 40px;
  }
`;

export const UserName = styled.div`
  font-weight: bold;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
`;
