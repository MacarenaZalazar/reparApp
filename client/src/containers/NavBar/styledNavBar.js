import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: #ff8882;
  width: 100%;
  box-shadow: 0 16px 24px -18px rgba(181,129,108,.5)
`;

export const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    font-size: 14px;
    font-color: black;
  }
  a{
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: rgb(248, 248, 248);
    border-radius: 1rem;
    border: 1px solid;
    padding: 1rem 2rem;
    transition: 0.6s ease;
    p {
      font-weight: bold;
    }

    :hover {
      background-color: #194350;
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
