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
  .linkHome {
    color: black;
  }
  .navButtons {
    margin-right: 50px;
  }

  .linkLogin,
  .linkSignin {
    text-decoration: none;
    transition: 0.6s ease;
    padding: 1rem 2rem;
    color: rgb(248, 248, 248);
    font-weight: bold;
    background-color: transparent;
  }
  .linkSignin {
    border-radius: 1rem;
    border: 1px solid;

    p {
      font-weight: bold;
    }
    :hover {
      background-color: #194350;
      cursor: pointer;
    }
  }

  .linkLogin {
    :hover {
      color: #194350;
    }
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
