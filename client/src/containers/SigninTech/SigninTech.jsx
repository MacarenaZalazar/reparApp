import { StyledDiv, SigninDiv } from "./styledSigninTech";

import FormTechnicUser from "../../components/FormUsers/FormTechnicalUser/FormTechnicUser";

const SigninTech = () => {
  return (
    <StyledDiv>
      <SigninDiv>
        <h3>Usuario Técnico</h3>
        <FormTechnicUser />
      </SigninDiv>
    </StyledDiv>
  );
};

export default SigninTech;
