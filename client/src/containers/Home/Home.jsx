import React from 'react';
import DisplayFilters from '../DisplayFilters/DisplayFilters';
import TechnicUsers from '../TechnicUsers/TechnicUsers';
import { StyledDiv } from './Styles';

const Home = () => {
    return (
        <StyledDiv>
            <DisplayFilters/>
            <TechnicUsers/>
        </StyledDiv>
    );
};

export default Home;