import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ADMIN_URL } from '../../utils/constants';
import WorkOrder from '../WorkOrder/WorkOrder';


const ReportedWorkOrdes = () => {
    const [orders, setOrders] = useState([])
    const [flag, setFlag] = useState(true)
    const userString = window.sessionStorage.getItem("user");
    const useR = JSON.parse(userString);
    let config = {
      headers: {
        "x-access-token": useR && useR.token,
      },
    };
    useEffect(  () => {
      (async () => {
        const workOrders = await axios.get(`${ADMIN_URL}/reported/workOrders`, config) 
        setOrders(workOrders.data)})()
      
    }, [flag])

    const handleBan = async (id) => {
        try {
          await axios.put(`${ADMIN_URL}/ban/work`, {ban: true, id},config)
          alert('El pedido ha sido baneado')
          setFlag(false)
        } catch (error) {
          alert('No se ha podido banear el pedido')
        }
      }
    
      const handleUnbanned = async (id) => {
        try {
          await axios.put(`${ADMIN_URL}/ban/work`, {ban: true, id},config)
          alert('El pedido ha sido baneado')
          setFlag(true)
        } catch (error) {
          alert('No se ha podido banear el pedido')
        }
      }
    return (
        <div>
            <h3>WorkOrders reportadas</h3>
            {orders.length > 1 ? 
            <>
                {orders.map((o, idx) => {
                 return <>  <WorkOrder key={idx} /> 
                 {(o.ban) ?  <button onClick={() => handleBan(o.id)}>Banear</button> :
                <button onClick={() => handleUnbanned(o.id)}>Desbanear</button>}
                 </>
                })}
            </>
              : <span>No se han encontrado órdenes de trabajo baneadas</span>
            }
        </div>
    );
};

export default ReportedWorkOrdes;