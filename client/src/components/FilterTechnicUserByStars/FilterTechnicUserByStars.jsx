import React from 'react';
import { useState } from 'react';

const FilterTechnicUserByStars = () => {
    const [select, setSelect] = useState('')

    const onChange = (e) => {
        setSelect(e.target.value)
    }

    const filterDisplay = ['', 'mayor puntuación', 'menor puntuación']
    return (
        <div>
            <label>Ordenar por</label>
            <select name="puntuación" onChange={onChange}>
                { filterDisplay.map(e => {
                    return <option value={e}>{e}</option>
                    })
                }
            </select>            
        </div>
    );
};

export default FilterTechnicUserByStars;