import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { ADMIN_URL } from '../../utils/constants';
import WorkOrder from '../WorkOrder/WorkOrder';
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);


const ReportedWorkOrdes = () => {
    const [orders, setOrders] = useState([])
    const [flag, setFlag] = useState(true)
    const userString = window.sessionStorage.getItem("user");
    const useR = JSON.parse(userString);
    const config = useMemo(()=> {
      return {
        headers: {
          "x-access-token": useR && useR.token,
        },
      };
    }, [useR])
    console.log(orders)
    useEffect(  () => {
      (async () => {
        const workOrders = await axios.get(`${ADMIN_URL}/reported/workOrders`, config) 
        setOrders(workOrders.data)})()
    }, [flag])

    const handleBan = async (id) => {
        try {
          await axios.put(`${ADMIN_URL}/ban/work`, {ban: true, id},config)
          MySwal.fire({
            title: "El pedido ha sido baneado",
            confirmButtonColor: "#0a122aff",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
          setFlag(!flag)
        } catch (error) {
          MySwal.fire({
            title: "No se ha podido banear el pedido",
            confirmButtonColor: "#0a122aff",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
        }
      }
    
      const handleUnbanned = async (id) => {
        try {
          await axios.put(`${ADMIN_URL}/ban/work`, {ban: false, id},config)
          MySwal.fire({
            title: "El pedido ha sido desbaneado",
            confirmButtonColor: "#0a122aff",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
          setFlag(!flag)
        } catch (error) {
          MySwal.fire({
            title: "No se ha podido desbanear el pedido",
            confirmButtonColor: "#0a122aff",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
        }
      }
      const handleUnreport = async (id) => {
        try {
          await axios.put(`${ADMIN_URL}/reported/workOrders/${id}`, config)
          MySwal.fire({
            title: "El pedido ha sido desreportado",
            confirmButtonColor: "#0a122aff",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
          setFlag(!flag)
        } catch (error) {
          MySwal.fire({
            title: "No se ha podido desreportar el pedido",
            confirmButtonColor: "#0a122aff",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
        }
      }
      
    return (
        <div>
            <h3>WorkOrders reportadas</h3>
            {orders.length > 0 ? 
            <>
                {orders.map((o, idx) => {
                 return <>  <WorkOrder key={idx} /> 
                 {(!o.ban) ?  <Button key={idx + 'b'} onClick={() => handleBan(o._id)}>Banear</Button> :
                <Button key={idx + 'a'} onClick={() => handleUnbanned(o._id)}>Desbanear</Button>}
                <Button key={idx + 'c'} onClick={() => handleUnreport(o._id)}>Desreportar</Button>
                 </>
                })}
            </>
              : <span>No se han encontrado órdenes de trabajo baneadas</span>
            }
        </div>
    );
};

export default ReportedWorkOrdes;