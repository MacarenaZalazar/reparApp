import React from 'react';
import TechnicUser from '../../components/TechnicUser/TechnicUser';
import { useSelector } from 'react-redux';
import {technicUsers} from '../../utils/mockData'
import {StyledDiv} from './Styles'

const TechnicUsers = () => {
    //const {technicUsers} = useSelector(state => state)
    return (
        <StyledDiv>
            {technicUsers.map((t, idx) => {
                return <TechnicUser key={idx} name={t.name}  lastName={t.lastName} user={t.user}
                image={t.image} score={t.score} workZones={t.workZones} jobTypes={t.jobTypes} />
            })}
        </StyledDiv>
        
    );
};

export default TechnicUsers;