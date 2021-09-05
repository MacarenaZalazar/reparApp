import { StyledDiv, SigninDiv } from "./styledSigninFinal";
import FormFinalUser from "../../components/FormUsers/FormFinalUser/FormFinalUser";

const SigninFinal = () => {
  return (
    <StyledDiv>
      <SigninDiv>
        <h3>Usuario Final</h3>
        <FormFinalUser />
      </SigninDiv>
    </StyledDiv>
  );
};

export default SigninFinal;
