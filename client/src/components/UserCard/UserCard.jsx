import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { ADMIN_URL } from '../../utils/constants';
import Button  from 'react-bootstrap/Button';



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
            <Link to={`/finalUserDetails/${id}`}><Button>Ver perfil</Button></Link>
            {/* <Link to={`/technicUserDetails/${id}`}>Button>Ver perfil</Button></Link> */}
            {(banned)? <Button onClick={() => handleUnban(id) }>Desbanear</Button> : 
                <Button onClick={() => handleBan(id)}>Banear</Button>
            }
              <Link to={`/workOrders/${id}`} ><Button>Ver pedidos de trabajo</Button></Link>
         
        </div>
    );
};

export default UserCard;