import React from "react";
import TechnicUser from "../../components/TechnicUser/TechnicUser";
import { useSelector } from "react-redux";
import { StyledDiv } from "./Styles";
import Carousel from "react-elastic-carousel";

const TechnicUsers = () => {
  const techUsers = useSelector((state) => state.techUsers);
  console.log(techUsers)

  return (
    <StyledDiv>
      {techUsers.length > 1 ? (
        <Carousel className="carousel" itemsToShow={1} outerSpacing={50}>
          {techUsers &&
            techUsers.map((t, idx) => {
              return (
                <TechnicUser
                  key={idx}
                  id={t._id}
                  name={t.user.name}
                  lastName={t.user.lastName}
                  user={t.user.userName}
                  image={t.user.image}
                  score={t.score}
                  workZones={t.workZones}
                  jobTypes={t.jobTypes}
                />
              );
            })}
        </Carousel>
      ) : (
        <span>No se han encontrado profesionales</span>
      )}
    </StyledDiv>
  );
};

export default TechnicUsers;
