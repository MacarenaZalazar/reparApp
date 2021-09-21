import React, {useState, useMemo} from 'react';
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {REQUEST_URL, TECH_USERS_URL} from '../../utils/constants';
import { useHistory } from 'react-router';


const ReportUser = ({workOrderId, userId}) => {
    const [motive, setMotive] = useState('')
    const [comment, setComment] = useState('')
    const motives = ['Infringe las normas del sitio', 'Publicación engañosa', 'Posible estafa', 'Otro']
    console.log(userId) 
    console.log(workOrderId) 
    const userString = window.sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    let config = useMemo(()=>{
      return {
        headers: {
          "x-access-token": user && user.token,
        },
      };
    }, [user]) 
    const history = useHistory()
    const showAlert = async () => {
       await Swal.fire({
            title: 'Estás segur@?',
            showCancelButton: true,
            
        }).then((result)=>{
             if(result.isConfirmed){
                 if(workOrderId){
                    axios.post(`${REQUEST_URL}/report?_id=${workOrderId}`, config)
                    .then((response)=> {
                        console.log('Confirmed')
                        Swal.fire({
                            title: 'El pedido ha sido reportado'
                        })
                        history.push('/home')
                    }).catch((error)=>{
                        console.log(error)
                        Swal.fire({
                            title: 'No se ha podido reportar'
                         })
                    })
                     

                }else{
                    axios.put(`${TECH_USERS_URL}/report?_id=${userId}`, config)
                    .then((response) => {
                        Swal.fire({
                            title: 'Usuari@ reportad@'
                        })
                        history.push('/home')
                    }).catch((error)=>{
                        console.log(error)
                        Swal.fire({
                            title: 'No se ha podido reportar'
                         })
                    })
                }
                //dispatch(reportar(movite, comment))
                //history.push('/home')
            }
        })
     
    }
    const handleChange = (e) =>{
        e.preventDefault()
        setMotive(e.target.value)
    }  
    const handleInputChange = (e) =>{
        setComment(e.target.value)
    } 
    return (
        <div>
            <span>Soy ReportUser</span> 
             <h1>Reportar</h1>
             <label>Selecciona un motivo</label>
             <select name="motivo" onChange={handleChange}>
                 <option value=""></option>
                 {motives.map((m, idx) => {
                     return <option key={idx} value={m}>{m}</option>
                 })}
             </select>
             {motive === 'Otro' && 
             <>
             <label>¿Cuál?</label>
             <input onChange={handleInputChange} value={comment} />
             </>}
            {motive && <Button onClick={showAlert}>Reportar</Button>}
        </div>
    );
};

export default ReportUser;