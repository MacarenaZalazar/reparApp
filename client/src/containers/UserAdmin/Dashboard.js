import React from "react";
//import UpdateJobTypes from "../../components/Admin/UdateJobTypes";
import NewJobType from "../../components/Admin/NewJobType.jsx";
import DeleteJobType from '../../components/Admin/DeleteJobType';
import { StyledDashContainer } from './StyledDashboar';
import { Link } from 'react-router-dom';
import BanUser from '../../components/Admin/BanUser';


function Dashboard() {

  return (
    <StyledDashContainer>
          <div className='works'>
            <h2>Tipos de trabajo</h2>
            <div className='workContainer'>
              <NewJobType />
              <DeleteJobType/>
            </div>
          </div>
            <Link className='reported' to='/reportados'>Ver Reportados</Link>
          <div>

          <h3>Buscar Usuario</h3>
          <BanUser/>
          </div>
    </StyledDashContainer>
  );
}

export default Dashboard;
