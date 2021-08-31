import React from 'react';
import { useState } from 'react';
import { StyledDiv } from './Styles';

const FilterTechnicUserByStars = () => {
    const [select, setSelect] = useState('')

    const onChange = (e) => {
        setSelect(e.target.value)
    }

    const filterDisplay = ['', 'mayor puntuación', 'menor puntuación']
    return (
            <StyledDiv>
                <label>Ordenar por</label>
                <select className='form-select form-select-sm' name="puntuación" onChange={onChange}>
                    { filterDisplay.map(e => {
                        return <option value={e}>{e}</option>
                    })
                }
                </select>            
            </StyledDiv>
    );
};

export default FilterTechnicUserByStars;