import styled from "styled-components";
import gifSignin from "../../utils/gif/signin.gif";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 10.753rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${gifSignin});
  background-position: center left;
  background-size: 25%;
  background-repeat: no-repeat;

  h3 {
    text-align: center;
  }
`;

export const SigninDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
