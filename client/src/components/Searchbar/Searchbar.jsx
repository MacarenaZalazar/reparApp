import React, {useState} from 'react';
import { StyledDiv } from './SearchbarStyles'

const Searchbar = () => {
    const [input, setInput] = useState('')
    const [select, setSelect] = useState('')

    const handleChange  = (e) => {
        setInput(e.target.value)
        console.log('input on change')
    }
    const handleSelect = (e) => {
        setSelect(e.target.value)
        console.log('select on change')
    }
    const onClick = (e) => {
        e.preventDefault()
        const filter = [select, input]
        setInput('')
    }


    return (
        <StyledDiv>
            <label>¿Qué necesitas?</label>
            <select className='form-select form-select-sm' name="oficios" handleChange={handleSelect}>
                <option value=""></option>
            </select>
            <label>¿Dónde?</label>
            <input type="text" value={input} onChange={handleChange} />
            <button className='btn btn-outline-dark'onClick={onClick}>Buscá!</button>
        </StyledDiv>
    );
};

export default Searchbar;