import React, {useState} from "react";
import UserCard from "../UserCard/UserCard";
import axios from "axios";
import { ADMIN_URL } from "../../utils/constants";

const BanUser = () => {
  const [user, setUser] = useState([])

  const handleChange = async (e) => {
    try {
      const usersByUsername = await axios.get(`${ADMIN_URL}/userbyuserName?userName=${e.target.value}`)
      setUser(usersByUsername.data)
    } catch (error) {
      console.log(error)
    }
  };

  const handleClick = async (id) => {
   try {
     await axios.put(`${ADMIN_URL}/ban/user`, {id, ban: true})
     alert('Usuari@ banead@')
   } catch (error) {
    alert('No se ha podido banear al usuari@') 
   }
  };

  // 
 
console.log(user)
  return (
    <div>
      <label>Buscar Usuari@</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="nombre de usuario..."
      />
      {user.length > 1 &&
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
              <button onClick={handleClick(u.id)}>Bannear</button>
            </>
          );
        })}
    </div>
  );
};

export default BanUser;
