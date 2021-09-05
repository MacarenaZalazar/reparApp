import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTechUsersById } from "../../redux/actions/techUsers";
import { StyledDiv } from './Styled';


export default function TechnicUserDetails(props) {
  const technicUserID = props.match.params.Id;
  console.log(technicUserID)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechUsersById(technicUserID));
  }, []);

 const TechUser = useSelector((state) => state.technicUserDetail);

  return (
    <StyledDiv>
    <div className='UserDetContainer'>
      <h1>{TechUser.user.userName}</h1>
      <h2>{TechUser.user.lastName}</h2>
      <h4>{TechUser.user.name}</h4>
      <img src={TechUser.image} alt="" />
      <h4>{TechUser.score}</h4>
      <p>{TechUser.phone}</p>
      <p>Zonas de trabajo:</p>
      <ul>
        {TechUser.workZones &&
          TechUser.workZones.map((zone, idx) => {
            return <li key={idx}>{zone}</li>;
          })}
      </ul>
      <p>Especializado en:</p>
      <ul>
        {TechUser.jobTypes &&
          TechUser.jobTypes.map((zone, idx) => {
            return <li key={idx}>{zone}</li>;
          })}
      </ul>
      <p>Calificaciones :</p>
      <ul>
        {TechUser.qualification &&
          TechUser.qualification.map((zone, idx) => {
            return <li key={idx}>{zone}</li>;
          })}
      </ul>
    </div>
    </StyledDiv>
  );
}
