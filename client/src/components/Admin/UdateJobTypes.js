import React from "react";

function UpdateJobTypes({ name }) {
  return (
    <div className='container'>
    <div className="row">
      <div className="col-sm">
        <div class="card" style={{ width: 18 + "rem" }}>
          <div class="card-body bg-dark d-flex ">
            <h5 class="card-title text-light">{name}fsdfgasd</h5>
            <button type="button" class="btn btn-danger mt-4 w-50 justify-content-center ">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="col-sm">
        {/* Darle funcionalidad a este formulario, en si es el Update de los tipos de trabajo */}
        <form>
          <div class="form-group ">
            <label for="exampleInputEmail1">JobType Name</label>
            <input type="text" class="form-control"  placeholder="New Name"/>
            <div className=' d-flex justify-content-center'>
            <button type="submit" class="btn btn-success mt-4 w-50 ">Submit</button>
            </div>
          </div>
        </form>
      </div>

    </div>
    </div>
  );
}

export default UpdateJobTypes;
