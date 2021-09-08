import React from "react";

function UpdateJobTypes({name}) {
  return (
      <div class="card" style={{width: 18 + 'rem'}}>
        <div class="card-body bg-dark">
          <h5 class="card-title text-light">{name}</h5>
          <button type="button" class="btn btn-success">
            Success
          </button>
          <button type="button" class="btn btn-danger ">
            Danger
          </button>
        </div>
      </div>
  );
}

export default UpdateJobTypes;
