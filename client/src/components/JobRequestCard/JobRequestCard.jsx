import React from 'react';

const JobRequestCard = ({id, ban, reported,title, description, complete, state, image, workType}) => {
    
   

    function handleClick(){
        //dispatch
    }

    return (
        <div>
            <span>{title} </span>
            <span>{description}</span>
            <span>{ban}</span>
            <span>{reported}</span>
            <span>{workType}</span>
            <span>{state}</span>
            <span>{complete}</span>
            <img src={image} alt="" />
            <button onClick={handleClick}>Ver más</button>

            
        </div>
    );
};

export default JobRequestCard;