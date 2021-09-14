import React from 'react';

const UserCard = ({name, lastName, img, user, id, score, jobTypes, workZones, phone, mail}) => {
    console.log(name)
    console.log('estoy en userCard')
    return (
        <div>
            <span>{id}</span>
            <span>{`${name} ${lastName}`}</span>
            <span>{user}</span>
            <img src={img} alt={name} />
            <span>{score}</span>
            <span>{(jobTypes) && jobTypes}</span>
            <span>{(workZones) && workZones}</span>
            <span>{phone}</span>
            <span>{mail}</span>
         
        </div>
    );
};

export default UserCard;