import React from 'react';
import ReportedUsers from '../../components/Admin/ReportedUsers';
import ReportedWorkOrdes from '../../components/Admin/ReportedWorkOrdes';


const Reported = () => {
    return (
        <div>
            <h3>Reportados</h3>
            <ReportedUsers/>
            <ReportedWorkOrdes/>
        </div>
    );
};

export default Reported;