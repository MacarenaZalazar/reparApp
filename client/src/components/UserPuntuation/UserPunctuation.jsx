import React from 'react';
import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
//import { useDispatch } from 'react-redux';
//import { postScore } from '../../redux/actions/allUsers/index';


const UserPunctuation = () => {
    const [score, setScore] = useState('')
    const stars = [1,2,3,4,5]

    //const dispatch = useDispatch()

    function renderStars(n, idx){
        let i = 1
        let stars = []
        while(i<=n){   
            stars.push(<AiFillStar/>)
        }
        return <option value={n} key={idx}>{stars.join('')}</option>
    }
    function onChange(e){
        setScore(e.target.value)
    }

    function handleClick(){
        //dispatch(postScore(score))
    }

    return (
        <div>
            <span>Del 1 al 5, cómo puntuarías a 'nombre del usuari@'</span>
            <select name="" id="" onChange={onChange}>
                {stars.map((n, idx)=>{
                    return renderStars(n, idx)
                })}
            </select>
            <button onClick={handleClick}>Puntuar!</button>
            
        </div>
    );
};

export default UserPunctuation;