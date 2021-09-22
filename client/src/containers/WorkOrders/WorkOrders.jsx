import WorkOrder from "../../components/WorkOrder/WorkOrder";
import { useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import { StyledDiv } from "./styledWorkOrders";

const WorkOrders = () => {
  const allRequest = useSelector((state) => state.allRequests);

  return (
    <StyledDiv>
      {allRequest.length > 0 ? (
        <Carousel className="carousel" itemsToShow={1} outerSpacing={50}>
          {allRequest &&
            allRequest.map((e, idx) => {
              return (
                !e.solicited && (
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
                )
              );
            })}
        </Carousel>
      ) : (
        <span>No se han encontrado pedidos de trabajo</span>
      )}
    </StyledDiv>
  );
};

export default WorkOrders;
