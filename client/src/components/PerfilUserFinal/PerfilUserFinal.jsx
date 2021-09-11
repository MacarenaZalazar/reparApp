import React from "react";
import MenuUpDate from "./MenuUpDate";
function PerfilUserFinal() {

  // const userString = window.sessionStorage.getItem("user");
  // const userSession = JSON.parse(userString);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTechUsersById(userSession.id));
  // }, []);
  return (
    <div className="container">
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
          <div className="row flex-column">
            <div className="col-sm">
              <p>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
                >
                  Aca habra un form
                </button>
              </p>
              <div >
                <div
                  class="collapse collapse-horizontal"
                  id="collapseWidthExample"
                >
                  <div class="card card-body" >
                    This is some placeholder content for a horizontal collapse.
                    It's hidden by default and shown when triggered.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <p>
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Nueva Peticion
                </a>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample2"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample2"
                >
                  Peticiones anteriores
                </button>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target=".multi-collapse"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1 multiCollapseExample2"
                >
                  Toggle both elements
                </button>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="multiCollapseExample1"
                  >
                    <div class="card card-body">
                      <MenuUpDate />
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="multiCollapseExample2"
                  >
                    <div class="card card-body">
                      Some placeholder content for the second collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilUserFinal;
