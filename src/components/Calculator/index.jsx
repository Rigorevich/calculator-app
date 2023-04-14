import React from "react";
import Display from "Components/Display";
import ControlPanel from "Components/ControlPanel";
import Keypad from "Components/Keypad";
import History from "../History";
import { Container, CalculatorBlock, HistoryBlock } from "./styled";

const Calculator = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <Container>
      <CalculatorBlock>
        <ControlPanel setIsVisible={setIsVisible} />
        <Display />
        <Keypad />
      </CalculatorBlock>
      {isVisible && (
        <HistoryBlock>
          <History />
        </HistoryBlock>
      )}
    </Container>
  );
};

export default Calculator;
