import React, {useState} from 'react';

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
        <div>
            <label>¿Qué necesitas?</label>
            <select name="oficios" handleChange={handleSelect}>
                <option value=""></option>
            </select>
            <label>¿Dónde?</label>
            <input type="text" value={input} onChange={handleChange} />
            <button onClick={onClick}>Buscá!</button>
        </div>
    );
};

export default Searchbar;