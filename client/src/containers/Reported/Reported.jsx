import React from "react";
import ReportedUsers from "../../components/Admin/ReportedUsers";
import ReportedWorkOrdes from "../../components/Admin/ReportedWorkOrdes";
import { ReportedContainer, StyledDiv } from "./ReportedStyled";

const Reported = () => {
  return (
    <StyledDiv>
      <ReportedContainer>
        <h3>Reportados</h3>
        <ReportedUsers />
        <ReportedWorkOrdes />
      </ReportedContainer>
    </StyledDiv>
  );
};

export default Reported;
