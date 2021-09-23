import React from "react";
import TechnicUser from "../../components/TechnicUser/TechnicUser";
import { useSelector } from "react-redux";
import { StyledDiv } from "./Styles";
import Carousel from "react-elastic-carousel";

const TechnicUsers = () => {
  const techUsers = useSelector((state) => state.techUsers);

  return (
    <>
      {techUsers.length > 0 ? (
        <StyledDiv>
          <div className="title">
            <p>Usuarios Técnicos</p>
          </div>
          <Carousel className="carousel" itemsToShow={1} outerSpacing={50}
          itemPadding={[0,50]}>
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
        </StyledDiv>
      ) : (
        <StyledDiv>
          <div className="notFound">
            <h4>No se han encontrado profesionales</h4>
          </div>
        </StyledDiv>
      )}
    </>
  );
};

export default TechnicUsers;
