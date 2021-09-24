import React, { useState } from "react";
import axios from "axios";
import { MERCADOPAGO_URL } from "../../utils/constants";
import PagoPromocion from "./PagoPromocion";
import Button from "react-bootstrap/Button";
import { StyledDiv, ContentDiv } from "./styledCheckout";

const Checkout = () => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  const userId = user.id;
  const [data, setData] = useState("");
  const [flag, setFlag] = useState(false);
  const days = [7, 15, 30];
  const [order, setOrder] = useState({});

  const handleChange = (e) => {
    setOrder({
      title: `Promoción ${e.target.value}D`,
      unit_price: 15 * e.target.value,
      quantity: 1,
    });
    setData("");
    setFlag(false);
  };
  const handleClick = async () => {
    try {
      const mp = await axios.post(`${MERCADOPAGO_URL}?userId=${userId}`, order);
      setFlag(true);
      setData(mp.data.init_point);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledDiv className="container">
      <ContentDiv>
        <div className="title">
          <h4>¡Promocioná tu perfil!</h4>
        </div>

        <div className="content">
          <h4>Cantidad de días</h4>
          <div>
            <select onChange={(e) => handleChange(e)} name="" id="">
              <option value=""></option>
              {days.map((d, id) => {
                return (
                  <>
                    <option value={d} key={id}>
                      {d}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <Button onClick={handleClick}>Seleccionar</Button>
          {flag ? (
            data ? (
              <PagoPromocion order={order} data={data} />
            ) : (
              <span>Aguarda unos momentos...</span>
            )
          ) : null}
        </div>
      </ContentDiv>
    </StyledDiv>
  );
};

export default Checkout;
