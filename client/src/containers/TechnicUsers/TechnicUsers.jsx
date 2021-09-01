import React from 'react';
import TechnicUser from '../../components/TechnicUser/TechnicUser';
import { useSelector } from 'react-redux';
import {technicUsers} from '../../utils/mockData'
import {StyledDiv} from './Styles'

const TechnicUsers = () => {
    //const {technicUsers} = useSelector(state => state)
    console.log('estoy en techUserS')
    
    return (
        <StyledDiv>
            {technicUsers.map(t => {
                return <TechnicUser name={t.name}  lastName={t.lastName} user={t.user}
                image={t.image} score={t.score} workZones={t.workZones} jobTypes={t.jobTypes} />
            })}
        </StyledDiv>
        
    );
};

export default TechnicUsers;