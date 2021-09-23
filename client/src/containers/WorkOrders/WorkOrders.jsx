import WorkOrder from "../../components/WorkOrder/WorkOrder";
import { useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import { StyledDiv } from "./styledWorkOrders";

const WorkOrders = () => {
  let {allRequests} = useSelector((state) => state);
  allRequests = allRequests.filter(e => !e.solicited)

  return (
    <>
      {allRequests.length > 0 ? (
        <StyledDiv>
          <div className="title">
            <p>Solicitudes de Trabajo</p>
          </div>
          <Carousel className="carousel" itemsToShow={1} outerSpacing={50}
          itemPadding={[0,50]}>
            {allRequests.map((e, idx) => {
                return (
                    <>
                      <WorkOrder
                        key={idx}
                        title={e.title}
                        description={e.description}
                        state={e.state}
                        zone={e.zone}
                        workImage={e.workImage}
                        _id={e._id}
                        userFinal={e.userFinal}
                      />
                    </>
                );
              })}
          </Carousel>
        </StyledDiv>
      ) : (
        <StyledDiv>
          <div className="notFound">
            <h4>No se han encontrado pedidos de trabajo</h4>
          </div>
        </StyledDiv>
      )}
    </>
  );
};

export default WorkOrders;
