import React, { useState } from "react";
import UserCard from "../UserCard/UserCard";
import axios from "axios";
import { ADMIN_URL } from "../../utils/constants";
import {Button, ContainerDiv, TitleDiv, UserDiv} from './Styles'


const BanUser = () => {
  const [user, setUser] = useState([]);
  const [input, setInput] = useState("");

  const userString = window.sessionStorage.getItem("user");
  const useR = JSON.parse(userString);

  let config = {
    headers: {
      "x-access-token": useR && useR.token,
    },
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = async () => {
    try {
      const usersByUsername = await axios.get(
        `${ADMIN_URL}/userbyuserName?userName=${input}`,
        config
      );
      setUser(usersByUsername.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <>
    <UserDiv>
    <ContainerDiv>
      <TitleDiv>
        <h4>Buscar Usuari@</h4>
      </TitleDiv>

      <div className='littleContainer'>

      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="nombre de usuario..."
        />
      <Button onClick={handleClick}>
        <p>Buscar</p>
        </Button>
      </div>
      </ContainerDiv>
      
      <>
      {user.length > 0 &&
        user.map((u, idx) => {
          return (
            <>
              <UserCard
                key={idx}
                id={u._id}
                ban={u.ban}
                image={u.image}
                name={u.name}
                lastName={u.lastName}
                state={u.state}
                userName={u.userName}
                score={u.score}
                promoted={u.promoted}
                idTech={u.techUserId || null}
                idFinal={u.finalUserId || null}
              />
            </>
          );
        })}
        </>
      </UserDiv>
  </>
  );
};

export default BanUser;