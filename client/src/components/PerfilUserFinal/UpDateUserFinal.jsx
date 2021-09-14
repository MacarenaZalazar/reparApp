import React,{ useState, useEffect }  from "react";
import {putFinalUsersAll} from '../../redux/actions/finalUser/index'
import { useDispatch } from "react-redux";

function UpDateUserFinal() {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    image: "",
    phone: "",
    mail: "",
    state: "",
    zone: "",
  });

  function handleInputChange(evento) {
    setInput((input) => ({
      ...input,
      [evento.target.name]: evento.target.value,
    }));
  }
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(putFinalUsersAll(input));
  // }, [dispatch]);  

  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  return (
    <>
      <form className='w-75 m-auto'>
        <div class="form-group mt-2">
          <label for="exampleInputEmail1">Yours Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter you Name"
          />
        </div>

        <div class="form-group mt-2">
          <label for="exampleInputEmail2">Yours Lastname</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter you Lastname"
          />
        </div>

        <div class="form-group mt-2">
          <label for="exampleFormControlFile3">Enter You Image</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile3"
          />
        </div>

        <div class="form-group mt-2">
          <label for="exampleInputEmail4">Yours Number Phone</label>
          <input
            type="tell"
            class="form-control"
            id="exampleInputEmail4"
            aria-describedby="emailHelp"
            placeholder="Enter you Number Phone"
          />
        </div>

        <div class="form-group mt-2">
          <label for="exampleInputEmail5">Yours Username</label>
          <input
            class="form-control"
            type="text"
            placeholder="Username"
            aria-label="Disabled input example"
            disabled
          />
          <small id="usernameHelp" class="form-text text-muted">
            La Username no debe ser cambiado desde acá, solo es de lectura
          </small>
        </div>

        <div class="form-group mt-2">
          <label for="exampleInputEmail6">Yours Password</label>
          <input
            class="form-control"
            type="text"
            placeholder="Password"
            aria-label="Disabled input example"
            disabled
          />
          <small id="emailHelp" class="form-text text-muted">
            La contraseña no debe ser cambiada desde acá, solo es de lectura
          </small>
        </div>

        <div class="form-group mt-2">
          <label for="exampleInputEmail7">Yours Zone</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail7"
            aria-describedby="emailHelp"
            placeholder="Enter you Zone"
          />
        </div>

        <div class="form-group mt-2">
          <label for="exampleInputEmail8">Yours State</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail8"
            aria-describedby="emailHelp"
            placeholder="Enter you State"
          />
        </div>

        <button type="submit" class="btn btn-success w-100 mt-1">
          Save
        </button>
      </form>
    </>
  );
}

export default UpDateUserFinal;
