import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap/Button';

const Recomendatios = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    function handleChange(e){
        setInput(e.target.value)
    }

    function handleClick(e){
        e.preventDefault()
        //dispatch()
        setInput('')
    }
    return (
        <div>
            <h3>Deja tu reseña!</h3>
            <input onChange={handleChange} value={input} name='reseña' type="text" placeholder='Deja tu reseña...'/>
            <Button onClick={handleClick}>Enviar</Button>
            
        </div>
    );
};

export default Recomendatios;