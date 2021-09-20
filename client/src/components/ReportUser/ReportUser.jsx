import React, {useState} from 'react';
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button'

const ReportUser = () => {
    const [motive, setMotive] = useState('')
    const [comment, setComment] = useState('')
    const motives = ['Infringe las normas del sitio', 'Publicación engañosa', 'Posible estafa', 'Otro']
    const showAlert = async () => {
       await Swal.fire({
            title: 'Estás segur@?',
            showCancelButton: true,
        }).then((result)=>{
            if(result.isConfirmed){
                console.log('Confirmado')
                //dispatch(reportar(movite, comment))
                //history.push('/home')
            }else{
                console.log('Rechazado')
            }
        })
     
    }
    const handleChange = (e) =>{
        e.preventDefault()
        setMotive(e.target.value)
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
             <input value={comment} />
             </>}
            {motive && <Button onClick={showAlert}>Reportar</Button>}
        </div>
    );
};

export default ReportUser;