import React from 'react';
import TechnicUser from '../TechnicUser/TechnicUser';
import { useSelector } from 'react-redux';
import {technicUsers} from '../../mockData'

const TechnicUsers = () => {
    //const {technicUsers} = useSelector(state => state)
    console.log('estoy en techUserS')
    
    return (
        <div>
            {technicUsers.map(t => {
               return <TechnicUser name={t.name}  lastName={t.lastName} user={t.user}
               image={t.image} score={t.score} workZones={t.workZones} jobTypes={t.jobTypes} />
            })}
        </div>
    );
};

export default TechnicUsers;