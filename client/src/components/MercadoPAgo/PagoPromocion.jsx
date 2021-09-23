import React from 'react';
import  Button from 'react-bootstrap/Button';


const PagoPromocion = ({data, order}) => {
    const handleClick = () =>{
        window.location = data
    }
    return (
            <div>
                <span>{order.title}</span>
                <span>Precio ${order.unit_price}</span>
                <Button onClick={()=>handleClick()}>Pagar</Button>
            </div>

    );
};

export default PagoPromocion;