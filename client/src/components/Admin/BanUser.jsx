import React, {useState} from "react";
import UserCard from "../UserCard/UserCard";
import axios from "axios";
import { ADMIN_URL } from "../../utils/constants";
import  Button from 'react-bootstrap/Button';

const BanUser = () => {
  const [user, setUser] = useState([])
  const [input, setInput] = useState('')
  
  const userString = window.sessionStorage.getItem("user");
  const useR = JSON.parse(userString);

  let config = {
    headers: {
      "x-access-token": useR && useR.token,
    },
  };

  const handleChange = (e) => {
    setInput(e.target.value)
  };

  const handleClick = async () => {
    try {
      const usersByUsername = await axios.get(`${ADMIN_URL}/userbyuserName?userName=${input}`, config)
      setUser(usersByUsername.data)
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <div>
      <label>Buscar Usuari@</label>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="nombre de usuario..."
      />
      <Button onClick={handleClick} >Buscar</Button>
      {user.length > 0 &&
        user.map((u, idx) => {
          return (
            <>
              <UserCard
                key={idx}
                name={u.name}
                lastName={u.lastName}
                img={u.img}
                user={u.user}
                score={u.score}
                jobTypes={u.jobTypes}
                workZones={u.workZones}
                phone={u.phone}
                mail={u.mail}
                id={u._id}
                ban={u.ban}
              />              
            </>
          );
        })}
    </div>
  );
};

export default BanUser;
