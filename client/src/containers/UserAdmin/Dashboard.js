import React from "react";
import UpdateJobTypes from "../../components/Admin/UdateJobTypes";
import NewJobType from "../../components/Admin/NewJobType";
import DeleteJobRequest from '../../components/Admin/DeleteJobRequest';
import DeleteUser from '../../components/Admin/DeleteUser';
import DeleteJobType from '../../components/Admin/DeleteJobType';
import { StyledDashContainer } from './StyledDashboar';
import { Link } from 'react-router-dom';


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
          <DeleteUser/>
          <h3>Buscar publicación</h3>
          <DeleteJobRequest/>
          </div>
    </StyledDashContainer>
  );
}

export default Dashboard;
