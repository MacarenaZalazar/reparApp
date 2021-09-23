import React, { useState, useMemo } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { REQUEST_URL, TECH_USERS_URL } from "../../utils/constants";
import { useHistory } from "react-router";
import { StyledDiv, ItemDiv, Button } from "./styledReportUser";


const ReportUser = ({ workOrderId, userId }) => {
  const [motive, setMotive] = useState("");
  const [comment, setComment] = useState("");
  const motives = [
    "Infringe las normas del sitio",
    "Publicación engañosa",
    "Posible estafa",
    "Otro",
  ];
  
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  let config = useMemo(() => {
    return {
      headers: {
        "x-access-token": user && user.token,
      },
    };
  }, [user]);
  const history = useHistory();
  const showAlert = async () => {
    await Swal.fire({
      title: "Estás seguro?",
      showCancelButton: true,
      confirmButtonColor: "#0a122aff",
      background: "#e7decdff",
      backdrop: "rgba(10,18,42,0.6)",
    }).then((result) => {
      if (result.isConfirmed) {
        if (workOrderId) {
          axios
            .post(`${REQUEST_URL}/report?_id=${workOrderId}`, config)
            .then((response) => {
              console.log("Confirmed");
              Swal.fire({
                title: "El pedido ha sido reportado",
                confirmButtonColor: "#0a122aff",
                background: "#e7decdff",
                backdrop: "rgba(10,18,42,0.6)",
              });
              history.push("/home");
            })
            .catch((error) => {
              console.log(error);
              Swal.fire({
                title: "No se ha podido reportar",
                confirmButtonColor: "#0a122aff",
                background: "#e7decdff",
                backdrop: "rgba(10,18,42,0.6)",
              });
            });
        } else {
          axios
            .put(`${TECH_USERS_URL}/report?_id=${userId}`, config)
            .then((response) => {
              Swal.fire({
                title: "Usuario reportado",
                confirmButtonColor: "#0a122aff",
                background: "#e7decdff",
                backdrop: "rgba(10,18,42,0.6)",
              });
              history.push("/home");
            })
            .catch((error) => {
              console.log(error);
              Swal.fire({
                title: "No se ha podido reportar",
                confirmButtonColor: "#0a122aff",
                background: "#e7decdff",
                backdrop: "rgba(10,18,42,0.6)",
              });
            });
        }
        //dispatch(reportar(movite, comment))
        //history.push('/home')
      }
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setMotive(e.target.value);
  };
  const handleInputChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <StyledDiv>
      <ItemDiv>
        <p>Selecciona un motivo</p>
      </ItemDiv>
      <ItemDiv>
        <select name="motivo" onChange={handleChange}>
          <option value=""></option>
          {motives.map((m, idx) => {
            return (
              <option key={idx} value={m}>
                {m}
              </option>
            );
          })}
        </select>
        {motive === "Otro" && (
          <>
            <label>¿Cuál?</label>
            <input onChange={handleInputChange} value={comment} />
          </>
        )}
      </ItemDiv>
      <ItemDiv>
        {motive && <Button onClick={showAlert}>Reportar</Button>}
      </ItemDiv>
    </StyledDiv>
  );

};

export default ReportUser;
