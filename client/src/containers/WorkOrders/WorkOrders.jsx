import React from "react";
import WorkOrder from "../../components/WorkOrder/WorkOrder";
import { useSelector } from "react-redux";

import { StyledDiv } from "./styledWorkOrders";

const WorkOrders = () => {
  const allRequest = useSelector((state) => state.allRequest);
  console.log(allRequest);
  return (
    <StyledDiv>
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
    </StyledDiv>
  );
};

export default WorkOrders;
