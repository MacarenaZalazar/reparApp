import { StyledDiv, SigninDiv } from "./styledSigninTech";
import FormFinalUser from "../../components/FormUsers/FormFinalUser/FormFinalUser";
import FormTechnicUser from "../../components/FormUsers/FormTechnicalUser/FormTechnicUser";

const SigninTech = () => {
  return (
    <StyledDiv>
      <SigninDiv>
        <FormTechnicUser />
        <p>---------------</p>
        {/* <FormFinalUser /> */}
      </SigninDiv>
    </StyledDiv>
  );
};

export default SigninTech;
