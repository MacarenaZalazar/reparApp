import React from 'react';
import FilterByScore from '../../components/FilterByScore/FilterByScore';
import FilterByZoneAndJob from '../../components/FilterByZoneAndJob/FilterByZoneAndJob';
import { StyledDiv } from './Styles';



const DisplayFilters = () => {
    return ( 
        <StyledDiv>
            <FilterByScore/>
            <FilterByZoneAndJob/>
        </StyledDiv>  
    );
};

export default DisplayFilters;