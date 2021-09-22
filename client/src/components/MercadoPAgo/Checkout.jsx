import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { MERCADOPAGO_URL } from '../../utils/constants';
import PagoPromocion from './PagoPromocion';
import  Button from 'react-bootstrap/Button'

const Checkout = () => {
    const userString = window.sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    const userId = user.id
    const [data, setData] = useState('')
    const [flag, setFlag] = useState(false)
    const days = [7, 15,30]
    const [order, setOrder] = useState({})

    const handleChange = (e) => {
        setOrder({   
            title: `Promoción ${e.target.value}D`,
            unit_price: (15 * e.target.value),
            quantity: 1})
            setData('')
            setFlag(false)
    }
    const handleClick = async () =>{
                try {
                    const mp = await axios.post(`${MERCADOPAGO_URL}?userId=${userId}`, order)
                    setFlag(true)
                    setData(mp.data.init_point)
                } catch (error) {
                    console.log(error)
                }
    } 
    return (
        <div>
            
            <>
            <h1>Promocioná tu perfil!</h1>
            <h4>Seleccioná por cuánto tiempo</h4>
            <select onChange={(e)=>handleChange(e)} name="" id="">
                <option value=""></option>
                {days.map((d, id)=> {
                    return <><option value={d} key={id}>{d}</option></>
                })}
            </select><span>días</span>
            <Button onClick={handleClick}>Seleccionar</Button>
            { flag ? (data ?
            <PagoPromocion order={order} data={data} /> : 
            <span>Aguarda unos momentos...</span>) : null
            }
            </>
            
        </div>
    );
};

export default Checkout;