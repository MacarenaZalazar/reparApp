import React from 'react';
import Carousel from "react-elastic-carousel";
import { useSelector } from 'react-redux';
import { StyledDiv } from '../TechnicUsers/Styles';
import TechnicUser from '../../components/TechnicUser/TechnicUser';


const PromotedUsers = () => {
    const {promoted} = useSelector(state => state)
    return (
        <StyledDiv> 
            {promoted.length > 0 ? (
                <Carousel className="carousel" itemsToShow={1} outerSpacing={50}>
                {promoted &&
                    promoted.map((t, idx) => {
                    return (
                        <TechnicUser
                        key={idx}
                        id={t._id}
                        name={t.user.name}
                        lastName={t.user.lastName}
                        user={t.user.userName}
                        image={t.user.image}
                        score={t.score}
                        workZones={t.workZones}
                        jobTypes={t.jobTypes}
                        />
                    );
                    })}
                </Carousel>
            ) : (
                null
            )}
        </StyledDiv>
    );
};

export default PromotedUsers;