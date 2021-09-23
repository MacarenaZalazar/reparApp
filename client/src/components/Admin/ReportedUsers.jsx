import React, { useEffect, useState, useMemo }from 'react';
import { ContainerDiv } from '../../containers/FinalUserProfile/Styles';
import { ADMIN_URL } from '../../utils/constants';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import  Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);


const ReportedUsers = () => {
    const [flag, setFlag] = useState(true)
    const [reported, setReported] = useState([])
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
                console.log(users.data)
                setReported(users.data)
            } catch(error){
                console.log(error)
            }
        } )()
    }, [flag])

    const handleUnreport = async (id) => {
        try {
            await axios.put(`${ADMIN_URL}/reported/users/${id}`, config)
            MySwal.fire({
                title: "Usuario desreportado",
                confirmButtonColor: "#0a122aff",
                background: "#e7decdff",
                backdrop: "rgba(10,18,42,0.6)",
              });
            setFlag(!flag)
        } catch (error) {
            MySwal.fire({
                title: "No se ha podido desreportar",
                confirmButtonColor: "#0a122aff",
                background: "#e7decdff",
                backdrop: "rgba(10,18,42,0.6)",
              });
        }

    }

    return (
        <ContainerDiv>
            <h3>Usuarios reportados</h3>
            {reported.length > 0 ? 
            <>
            {reported.map((u, idx)=> {
                return <div key={idx}>
                 <UserCard
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
                <Button onClick={() => handleUnreport(u._id)}>Desreportar</Button>
                </div>
            }
            )}

            </> : <span>No se han encontrado usuarios reportados</span> }
         </ContainerDiv>
    );
};

export default ReportedUsers;