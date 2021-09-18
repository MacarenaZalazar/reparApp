import React from 'react';
import  Button from 'react-bootstrap/Button';


const PagoPromocion = ({data, order}) => {

    console.log(order)
    console.log(data)
    const handleClick = () =>{
        window.location = data
    }

    return (
            <div>

            <span>soy pagopromocion</span>

       
                <span>{order.title}</span>
                <span>${order.unit_price}</span>
                <Button onClick={()=>handleClick()}>Pagar</Button>
            </div>

    );
};

export default PagoPromocion;