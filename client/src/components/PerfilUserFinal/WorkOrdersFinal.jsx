import React, {useEffect , useState} from 'react';
import axios from "axios";
import { getRequestByUser } from '../../redux/actions/request/index';
import { Button } from 'react-bootstrap/Button';
import JobRequestCard from '../JobRequestCard/JobRequestCard';
import { REQUEST_URL } from '../../utils/constants';

const WorkOrdersFinalUser = () => {
    /* const [flag, setFlag] = useState(true) */
    const userID = props.match.params.id
    const dispatch = useDispatch()
    const {requestsByUser} = useSelector(state => state)
    const userString = window.sessionStorage.getItem("user");
    const useR = JSON.parse(userString);
    let config = {
      headers: {
        "x-access-token": useR && useR.token,
      },
    };
    useEffect(() => {
        dispatch(getRequestByUser(userID, config))
      }, [dispatch])
    
    const handleDelete= async (id) => {
        try {
          await axios.delete(`${REQUEST_URL}/${id}`, config)
          alert('El pedido ha sido eliminado')
          /* setFlag(!flag) */
        } catch (error) {
          alert('No se ha podido eliminar el pedido')
        }
    }  
  
    return (
        <div>
            {requestsByUser.map((w, idx) => {
                return <div>
                    <JobRequestCard key={idx} title={w.title} description={w.description} state={w.state} zone={w.zone} workImage={z.workImage} _id={w._id} />
                    <Button onClick={() => handleDelete(w._id)}>Eliminar</Button>
                    </div>
            })}
            
        </div>
    );
};

export default WorkOrdersFinalUser;