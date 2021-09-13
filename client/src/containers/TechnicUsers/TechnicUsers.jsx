import React from "react";
import TechnicUser from "../../components/TechnicUser/TechnicUser";
import { useSelector } from "react-redux";
import { StyledDiv } from "./Styles";

const TechnicUsers = () => {
  const techUsers = useSelector((state) => state.techUsers);

  return (
    <StyledDiv>
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
    </StyledDiv>

  
  );
};

export default TechnicUsers;

  {/* <StyledDiv>
<Carousel className='carousel'
 itemsToShow={1}

 outerSpacing={100}>
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
   </StyledDiv> */}