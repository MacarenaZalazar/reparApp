import React from "react";
import { Link } from "react-router-dom";
function CardUserFinal({
  name,
  img,
  lastname,
  tell,
  mail,
  username,
  password,
  zone,
  state,
}) {
  return (
    <>
      <div class="card w-50 m-auto">
        <img src={img} class="card-img-top" alt='imagen'/>
        <div class="card-body">
          <h5 class="card-title">Name: {name}</h5>
          <h5 class="card-title">Lastname: {lastname}</h5>
          <h5 class="card-title">Phone: {tell}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Mail: {mail}</li>
          <li class="list-group-item">UserName: {username}</li>
          <li class="list-group-item">Zone: {zone}</li>
          <li class="list-group-item">State: {state}</li>
        </ul>
        <div class="card-body">
          <Link to="/home">
            <button type="button" class="btn btn-dark">
              Go To Home
            </button>
          </Link>
          <Link to="/newWorkOrder">
            <button type="button" class="btn btn-primary ml-3">
              New Work Order
            </button>
          </Link>
          <Link to="/modificarPerfilC">
            <button type="button" class="btn btn-primary ml-3">
              Modificar Perfil
            </button>
          </Link>
          {/* <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a> */}
        </div>
      </div>
    </>
  );
}

export default CardUserFinal;
