import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap/Button';

const Questions = () => {

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
            <h3>Dejá una pregunta</h3>
            <input onChange={handleChange} value={input} name='question' type="text" placeholder='Haz una pregunta...'/>
            <Button onClick={handleClick}>Enviar</Button>
        </div>
    );
};

export default Questions;