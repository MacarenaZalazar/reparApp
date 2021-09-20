import React, { useEffect, useState, useMemo }from 'react';
import { ContainerDiv } from '../../containers/FinalUserProfile/Styles';
import { ADMIN_URL } from '../../utils/constants';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';


const ReportedUsers = () => {
    const[reported, setReported] = useState([])
    const userString = window.sessionStorage.getItem("user");
    const useR = JSON.parse(userString);
    const config = useMemo(()=> {
        return {
          headers: {
            "x-access-token": useR && useR.token,
          },
        };
      }, [useR])

    useEffect(  () => {
       (async () => {
            try{
                const users = await axios.get(`${ADMIN_URL}/reported/users`, config)
                setReported(users.data)
            } catch(error){
                console.log(error)
            }
        } )()
    }, [config])

    return (
        <ContainerDiv>
            <h3>Usuarios reportados</h3>
            {reported.length > 1 ? 
            <>
            {reported.map((u, idx)=> {
                return <div>
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
                />
                </div>
            }
            )}

            </> : <span>No se han encontrado usuari@s reportad@s</span> }
         </ContainerDiv>
    );
};

export default ReportedUsers;