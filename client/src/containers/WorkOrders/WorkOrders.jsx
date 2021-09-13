import React from "react";
import WorkOrder from "../../components/WorkOrder/WorkOrder";
import { useSelector } from "react-redux";
import Carousel from 'react-elastic-carousel';
import { StyledDiv } from "./styledWorkOrders";

const WorkOrders = () => {
  const allRequest = useSelector((state) => state.allRequests);
  console.log(allRequest);
  return (
    <StyledDiv>
      <Carousel 
      className='carousel'
      itemsToShow={1}
      outerSpacing={50}>
      {allRequest &&
        allRequest.map((e, idx) => {
          console.log(e.title);
          return (
            <WorkOrder
              key={idx}
              title={e.title}
              description={e.description}
              state={e.state}
              zone={e.zone}
              workImage={e.workImage}
            />
          );
        })}
      </Carousel>
    </StyledDiv>
  );
};

export default WorkOrders;
