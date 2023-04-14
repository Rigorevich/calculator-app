import React from "react";
import { CIcon } from "./styled";

const ControlPanel = ({ setIsVisible }) => {
  return <CIcon onClick={() => setIsVisible((prev) => !prev)} />;
};

export default ControlPanel;
