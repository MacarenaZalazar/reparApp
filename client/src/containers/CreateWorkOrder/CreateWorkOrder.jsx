import { StyledDiv, SigninDiv } from "./styledCreateWorkOrder";
import FormWorkOrder from "../../components/FormWorkOrder/FormWorkOrder";

const CreateWorkOrder = () => {
  return (
    <StyledDiv>
      <SigninDiv>
        <h3>Crear nueva work order</h3>
        <FormWorkOrder />
      </SigninDiv>
    </StyledDiv>
  );
};

export default CreateWorkOrder;
