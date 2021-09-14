import React, {useState} from "react";
import UserCard from "../UserCard/UserCard";
import axios from "axios";
import { ADMIN_URL } from "../../utils/constants";

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

  const handleChange = async (e) => {
    setInput(e.target.value)
    try {
      const usersByUsername = await axios.get(`${ADMIN_URL}/userbyuserName?userName=${e.target.value}`)
      setUser(usersByUsername.data)
    } catch (error) {
      console.log(error)
    }
  };
  const handleBan= async (id) => {
    try {
      await axios.put(`${ADMIN_URL}/ban/user`,  {ban: true, id: id }, config)
      alert('Usuari@ banead@')
      try {
        const usersByUsername = await axios.get(`${ADMIN_URL}/userbyuserName?userName=${input}`)
        setUser(usersByUsername.data)
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
     alert('No se ha podido banear al usuari@') 
    }
   };

  const handleUnban= async (id) => {
   try {
     await axios.put(`${ADMIN_URL}/ban/user`,  {ban: false, id: id }, config)
     alert('Usuari@ banead@')
     try {
      const usersByUsername = await axios.get(`${ADMIN_URL}/userbyuserName?userName=${input}`)
      setUser(usersByUsername.data)
    } catch (error) {
      console.log(error)
    }
   } catch (error) {
    alert('No se ha podido banear al usuari@') 
   }
  };
 
console.log(user)
  return (
    <div>
      <label>Buscar Usuari@</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="nombre de usuario..."
      />
      {user.length >= 1 &&
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
              />
              {(u.ban)? <button onClick={() => handleUnban(u._id) }>Desbanear</button> : 
              <button key={idx+ 'b'} onClick={() => handleBan(u._id)}>Banear</button>
              }
            </>
          );
        })}
    </div>
  );
};

export default BanUser;
