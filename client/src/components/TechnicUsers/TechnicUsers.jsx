import React from 'react';
import TechnicUser from '../TechnicUser/TechnicUser';
import { useSelector } from 'react-redux';

const TechnicUsers = () => {
    const {techUsers} = useSelector(state => state)
    
    return (
        <div>
            {techUsers.map(t => {
                <TechnicUser techUser={techUser} />
            })}
        </div>
    );
};

export default TechnicUsers;