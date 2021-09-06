import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTechUsersById } from "../../redux/actions/techUsers";
import {
  StyledDiv,
  UserDetail,
  H2Div,
  H3Div,
  PDiv,
  ImageDiv,
  WorkZonesDiv,
  TechUserDiv,
  QualificationDiv,
  LeftDiv,
  RightDiv,
} from "./styledTechUserDetails";

export default function TechnicUserDetails(props) {
  const technicUserID = props.match.params.Id;
  console.log(technicUserID);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechUsersById(technicUserID));
  }, []);

  const TechUser = useSelector((state) => state.technicUserDetail);
  console.log(TechUser);

  return (
    <StyledDiv className="container">
      {TechUser.user ? (
        <UserDetail>
          <LeftDiv>
            <H2Div>
              <h2>{TechUser.user.userName}</h2>
            </H2Div>
            <H3Div>
              <h3>{TechUser.user.lastName}</h3>
            </H3Div>
            <H3Div>
              <h3>{TechUser.user.name}</h3>
            </H3Div>
            <ImageDiv>
              <img src={`${TechUser.user.image}`} alt="" />
            </ImageDiv>
          </LeftDiv>
          <RightDiv>
            <H3Div>
              <h4>{TechUser.score}</h4>
            </H3Div>
            <PDiv>
              <p>{TechUser.phone}</p>
            </PDiv>

            <WorkZonesDiv>
              <p>Zonas de trabajo:</p>
              <ul>
                {TechUser.workZones &&
                  TechUser.workZones.map((zone, idx) => {
                    return <li key={idx}>{zone}</li>;
                  })}
              </ul>
            </WorkZonesDiv>
            <TechUserDiv>
              <p>Especializado en:</p>
              <ul>
                {TechUser.jobTypes &&
                  TechUser.jobTypes.map((zone, idx) => {
                    return <li key={idx}>{zone}</li>;
                  })}
              </ul>
            </TechUserDiv>
            <QualificationDiv>
              <p>Calificaciones :</p>
              <ul>
                {TechUser.qualification &&
                  TechUser.qualification.map((zone, idx) => {
                    return <li key={idx}>{zone}</li>;
                  })}
              </ul>
            </QualificationDiv>
          </RightDiv>
        </UserDetail>
      ) : (
        <UserDetail>Cargando...</UserDetail>
      )}
    </StyledDiv>
  );
}
