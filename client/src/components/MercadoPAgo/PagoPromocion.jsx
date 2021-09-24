import React from "react";
import Button from "react-bootstrap/Button";
import { Pago } from "./styledCheckout";

const PagoPromocion = ({ data, order }) => {
  const handleClick = () => {
    window.location = data;
  };
  return (
    <Pago>
      <p>{order.title}</p>
      <p>Precio ${order.unit_price}</p>
      <Button onClick={() => handleClick()}>Pagar</Button>
    </Pago>
  );
};

export default PagoPromocion;
