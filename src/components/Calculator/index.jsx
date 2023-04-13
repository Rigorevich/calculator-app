import React from "react";
import {
  Container,
  CalculatorBlock,
  HistoryBlock,
  DisplayBox,
  DisplayInput,
  KeypadBox,
  Button,
} from "./styled";

const Display = () => {
  return (
    <DisplayBox>
      <DisplayInput />
    </DisplayBox>
  );
};

const Keypad = () => {
  return (
    <KeypadBox>
      <Button>C</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>*</Button>
      <Button>-</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>/</Button>
      <Button>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>=</Button>
      <Button>.</Button>
      <Button>(</Button>
      <Button>0</Button>
      <Button>)</Button>
      <Button>CE</Button>
    </KeypadBox>
  );
};

const ControlPanel = () => {
  return <div>ControlPanel</div>;
};

const History = () => {
  return <div>History</div>;
};

const Calculator = () => {
  return (
    <Container>
      <CalculatorBlock>
        <Display />
        <Keypad />
      </CalculatorBlock>
      <HistoryBlock>
        <ControlPanel />
        <History />
      </HistoryBlock>
    </Container>
  );
};

export default Calculator;
