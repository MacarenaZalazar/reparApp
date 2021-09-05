import React from "react";
import TechnicUser from "../../components/TechnicUser/TechnicUser";
import { useSelector } from "react-redux";
// import { technicUsers } from "../../utils/mockData";
import { StyledDiv } from "./Styles";

const TechnicUsers = () => {
  const techUsers = useSelector((state) => state.techUsers);
  return (
    <StyledDiv>
      {techUsers.map((t, idx) => {
        return (
          <TechnicUser
            key={idx}
            name={t.user.name}
            lastName={t.user.lastName}
            user={t.user.userName}
            image={t.image}
            score={t.score}
            workZones={t.workZones}
            jobTypes={t.jobTypes}
          />
        );
      })}
    </StyledDiv>
  );
};

export default TechnicUsers;
