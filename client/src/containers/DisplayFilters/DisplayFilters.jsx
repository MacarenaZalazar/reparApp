import React from 'react';
import FilterByScore from '../../components/FilterByScore/FilterByScore';
import FilterByZoneAndJob from '../../components/FilterByZoneAndJob/FilterByZoneAndJob';
import { StyledDiv } from './Styles';



const DisplayFilters = () => {
    return ( 
        <StyledDiv>
            <span>Ordenar por</span>
            <FilterByScore/>
            <span>Filtrar por:</span>
            <FilterByZoneAndJob/>
        </StyledDiv>  
    );
};

export default DisplayFilters;