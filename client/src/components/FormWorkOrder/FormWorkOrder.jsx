import React from "react";
import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getJob,postWorkOrder} from "../../actions/index";
import { StyledDiv } from './Styles';

export default function FilterByScore() {

  //const dispatch = useDispatch();
/*
  useEffect(() => {
       dispatch(getJob());
   }, []);
*/
  //const allJobs=useSelector((state)=> state.jobs);

  //const [error,setError] = useState({});
  //const [newWorkOrder,setNewWorkOrder] = useState({
  //      name: "",
  //      description: "",
  //      workType:""
  //  })

//-------------------------

function validate(input) {
/*
    let errors = {};
    if (!input.name) {
      errors.name = 'Colocar un nombre';
    } else{
      if (!input.description) {
      errors.description = 'colocar una descripcion';
    } 
    }
  
    return errors;
    */
  };

//-----------------------


  function handleChange(e){
    /*
       setNewWorkOrder({
           ...newWorkOrder,
           [e.target.name] : e.target.value 
       })
       setError(validate({
        ...newWorkOrder,
        [e.target.name]: e.target.value 
      }));
      */
   } 

   //---------------------

   function handleSelectJob(e){
    /*
        setNewWorkOrder({
            ...newWorkOrder,
            workType: e.target.value
             
        })
        */
}
 
 //-----------------------

 function handleSubmit(e){
  /*
    e.preventDefault();
    setError(validate({ 
        ...newWorkOrder,
        [e.target.name]:e.target.value
    }));

    dispatch(postWorkOrder(newWorkOrder));

    alert("Pedido creado");
    setNewWorkOrder({
        name: "",
        description: "",
        workType:""
    })
  */  
}


    return(
      <StyledDiv>
        <form onSubmit={(e)=>handleSubmit(e)}>

          <div>
            <label>Nombre:</label>
                <input
                  type= "text"
                  //value= {newWordOrder.name}
                  name= "name"
                  onChange={(e)=>handleChange(e)} 
                  />

                  {/*error.name && (
                  <p>{error.name}</p>
                  )*/}  
          </div>
{/*--------------------------------------------*/}
          <div>
            <label>Descripción:</label>
                <input
                  type= "text"
                  //value= {newWordOrder.description}
                  name= "description"
                  onChange={(e)=>handleChange(e)} 
                  />
                  {/*error.description && (
                  <p>{error.description}</p>
                  )*/}  
          </div>
{/*--------------------------------------------*/}
          <div>
            <label>Tipo de trabajo</label>
            <select onChange={e => handleSelectJob(e)}>        
                {/*allJobs.map((el) => { 
                      return (
                            <option value={el}>{el}</option>                
                     );
                })*/}
            </select>
          </div>
{/*--------------------------------------------*/}
          <br/>
          <button type='submit'>Crear pedido</button>    
        </form>        
      </StyledDiv>



      );
}