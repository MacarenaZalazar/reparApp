import React from 'react';
import { useDispatch } from 'react-redux';
import WorkOrder from '../../components/WorkOrder/WorkOrder';
import { Button } from 'react-bootstrap/Button';
import { ContainerDiv } from './Styles';


const DisplayWorkOrders = () => {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        //dispatch()
    },[])

    const {allRequests} = useSelector(state => state)


    return (
        <ContainerDiv>
            {allRequests && allRequests.map((r, idx) => {
                return <><WorkOrder key={idx} title={r.title} description={r.description} state={r.state} zone={r.zone} workImage={r.image} />
                <Button>Modificar</Button></>
            })}
            
        </ContainerDiv>
    );
};

export default DisplayWorkOrders;