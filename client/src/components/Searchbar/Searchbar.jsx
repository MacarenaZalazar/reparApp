import React, {useState} from 'react';
import { StyledDiv } from './SearchbarStyles'
import { Link } from 'react-router-dom';

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
    const handleClick = (e) => {
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
            <Link to='/home'>
                <h1 className='btn btn-outline-dark' onClick={handleClick}>Buscá!</h1>
            </Link>
        </StyledDiv>
    );
};

export default Searchbar;