import React from "react";
//import UpdateJobTypes from "../../components/Admin/UdateJobTypes";
import NewJobType from "../../components/Admin/NewJobType.jsx";
import DeleteJobType from '../../components/Admin/DeleteJobType';
import { StyledDashContainer } from './StyledDashboar';
// import { Link } from 'react-router-dom';
import BanUser from '../../components/Admin/BanUser';


function Dashboard() {

  return (
    <StyledDashContainer>
 
              <NewJobType />
              <DeleteJobType/>
 
            <BanUser/>
            {/* <Link to='/reportados'><Button><p>Ver reportados</p></Button></Link> */}

    </StyledDashContainer>
  );
}

export default Dashboard;
