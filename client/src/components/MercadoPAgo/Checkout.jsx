import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { MERCADOPAGO_URL } from '../../utils/constants';
import PagoPromocion from './PagoPromocion';
import { useMemo } from 'react';

const Checkout = () => {
    const userString = window.sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    const userId = user.id
    const [data, setData] = useState('')
    const order = useMemo(() => {
     return {
            title: "Promoción 7D",
            unit_price: 10,
            quantity: 1
        }
    }, [])
    useEffect(()=> {
        (async () => {
            try {
                const mp = await axios.get(`${MERCADOPAGO_URL}?userId=${userId}`, order)
                setData(mp.data.init_point)
            } catch (error) {
                console.log(error)
            }
        })()

    }, [order, userId])
    return (
        <div>
            {!data ? <span>Aguarde un momento...</span> :
            <PagoPromocion order={order} data={data} />
            }
        </div>
    );
};

export default Checkout;