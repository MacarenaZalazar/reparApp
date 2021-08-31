import React from "react";
import finalUser from "../finalUser/finalUser";
import useSelector from "react-redux";

const finalUser = () => {
  const { finalUser } = useSelector((state) => state);

  return (
    <div>
      {finalUser.map((t) => {
        <TechnicUser finalUser={finalUser} />;
      })}
    </div>
  );
};

export default finalUser;
