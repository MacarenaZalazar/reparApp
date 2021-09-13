import React from 'react';
import { useDispatch } from 'react-redux';
import WorkOrder from '../../components/WorkOrder/WorkOrder';
import { Button } from 'react-bootstrap/Button';


const DisplayWorkOrders = () => {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        //dispatch()
    },[])

    const {allRequests} = useSelector(state => state)


    return (
        <div>
            {allRequests && allRequests.map((r, idx) => {
                return <><WorkOrder key={idx} title={r.title} description={r.description} state={r.state} zone={r.zone} workImage={r.image} />
                <Button>Modificar</Button></>
            })}
            
        </div>
    );
};

export default DisplayWorkOrders;