import React from 'react';
import ReportedUsers from '../../components/Admin/ReportedUsers';
import ReportedWorkOrdes from '../../components/Admin/ReportedWorkOrdes';
import { ReportedContainer } from './ReportedStyled';


const Reported = () => {
    return (
        <ReportedContainer>
            <h3>Reportados</h3>
            <ReportedUsers/>
            <ReportedWorkOrdes/>
        </ReportedContainer>
    );
};

export default Reported;