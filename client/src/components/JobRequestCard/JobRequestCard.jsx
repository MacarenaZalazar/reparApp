import React from 'react';

const JobRequestCard = ({id, name, lastName, image, user, score, jobType, zone, request}) => {

    function handleClick(){
        //dispatch
    }

    return (
        <div>
            <span>{`${name} ${lastName}`} </span>
            <span>{user}</span>
            <span>{score}</span>
            <span>{jobType}</span>
            <span>{zone}</span>
            <span>{request}</span>
            <img src={image} alt="" />
            <button onClick={handleClick}>Ver más</button>

            
        </div>
    );
};

export default JobRequestCard;