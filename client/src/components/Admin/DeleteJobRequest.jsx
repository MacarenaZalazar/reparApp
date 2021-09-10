import React from 'react';
import { getAllJobRequests } from '../../redux/actions/allUsers';
import { useSelector } from 'react-redux';
import JobRequestCard from '../JobRequestCard/JobRequestCard';

const DeleteJobRequest = () => {
    const dispatch = useDispatch()
    const {allRequests} = useSelector(state => state)
    function handleChange(e){
        dispatch(getAllJobRequests(e.target.value))
    }
    function handleClick(id){
        dispatch(DeleteJobRequest(id))
    }
    return (
        <div>
            <label>Buscar pedido de trabajo</label>
            <input type="text" onChange={handleChange} placeholder='pedido de trabajo...'/>
            {allRequests.length > 1 && allRequests.map((u, idx) => {
                return <> 
                <JobRequestCard id={u.id} name={u.name} lastName={u.lastName} image={u.image} user={u.user} 
                score={u.score} jobType={u.jobType} zones={u.z} request={u.request} />
                <button onClick={handleClick(u.id)}>Eliminar</button> 
                </>
            })} 
        </div>
    );
};

export default DeleteJobRequest;