import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function technicUserDetails(props) {
  const technicUserID = props.match.params.id;

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch("ActionQuetraigaporIddetallesdeUsuariotech(technicUserID)");
  // }, []);

  // const TechUser = useSelector((state) => state.technicUserDetail);

  // return (
  //   <div>
  //     <h1>{TechUser.userName}</h1>
  //     <h2>{TechUser.lastName}</h2>
  //     <h4>{TechUser.name}</h4>
  //     <img src={TechUser.image} alt="" />
  //     <h4>{TechUser.score}</h4>
  //     <p>{TechUser.phone}</p>
  //     <p>Zonas de trabajo:</p>
  //     <ul>
  //       {TechUser.workZones &&
  //         TechUser.workZones.map((zone, idx) => {
  //           return <li key={idx}>{zone}</li>;
  //         })}
  //     </ul>
  //     <p>Especializado en:</p>
  //     <ul>
  //       {TechUser.jobTypes &&
  //         TechUser.jobTypes.map((zone, idx) => {
  //           return <li key={idx}>{zone}</li>;
  //         })}
  //     </ul>
  //     <p>Calificaciones :</p>
  //     <ul>
  //       {TechUser.qualification &&
  //         TechUser.qualification.map((zone, idx) => {
  //           return <li key={idx}>{zone}</li>;
  //         })}
  //     </ul>
  //   </div>
  // );
}
