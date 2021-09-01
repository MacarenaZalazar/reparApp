import React from 'react';
import FilterTechnicUserByScore from '../FilterTechnicUserByScore/FilterTechnicUserByScore';
import FilterByScore from '../FilterByScore/FilterByScore';
import FilterByZoneAndJob from '../FilterByZoneAndJob/FilterByZoneAndJob';


const DisplayFilters = () => {
    return ( 
        <>
            <FilterTechnicUserByScore/>
            <FilterByScore/>
            <FilterByZoneAndJob/>
        </>
    );
};

export default DisplayFilters;