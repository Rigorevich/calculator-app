import React from "react";

import { HBox, HTitle, HList, HItem } from "./styled";
import { useSelector } from "react-redux";

const History = () => {
  const operations = useSelector((state) => state.history);

  console.log(operations);

  return (
    <HBox>
      <HTitle>History</HTitle>
      <HList>
        {operations.map((operation, index) => (
          <HItem key={operation + index}>{operation}</HItem>
        ))}
      </HList>
    </HBox>
  );
};

export default History;
