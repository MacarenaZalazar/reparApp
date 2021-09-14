import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { ADMIN_URL } from '../../utils/constants';
import { Button } from 'react-bootstrap/Button';



const UserCard = ({name, lastName, img, user, id, score, jobTypes, workZones, phone, mail, ban}) => {
    const[banned, setBanned] = useState(ban)
    const userString = window.sessionStorage.getItem("user");
    const useR = JSON.parse(userString);
    let config = {
      headers: {
        "x-access-token": useR && useR.token,
      },
    };
    const handleBan= async (id) => {
        try {
          await axios.put(`${ADMIN_URL}/ban/user`,  {ban: true, id: id }, config)
          alert('Usuari@ banead@')
          setBanned(!banned)
        } catch (error) {
         alert('No se ha podido banear al usuari@') 
        }
       };
    
      const handleUnban= async (id) => {
       try {
        await axios.put(`${ADMIN_URL}/ban/user`,  {ban: false, id: id }, config)
        alert('Usuari@ desbanead@')
        setBanned(!banned)
       } catch (error) {
        alert('No se ha podido banear al usuari@') 
       }
      };
      console.log(banned)
    return (
        <div>
            <span>{`${name} ${lastName}`}</span>
            <span>{user}</span>
            <img src={img} alt={name} />
            <span>{score}</span>
            <span>{(jobTypes) && jobTypes}</span>
            <span>{(workZones) && workZones}</span>
            <span>{phone}</span>
            <span>{mail}</span>
            <Link to={`/finalUserDetails/${id}`}>Ver perfil</Link>
            <Link to={`/technicUserDetails/${id}`}>Ver perfil</Link>
            {(banned)? <button onClick={() => handleUnban(id) }>Desbanear</button> : 
                <button onClick={() => handleBan(id)}>Banear</button>
            }
              <Link to={`/workOrders/${id}`} >Ver pedidos de trabajo</Link>
         
        </div>
    );
};

export default UserCard;