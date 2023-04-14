import React from "react";
import { KBox, KButton } from "./styled";

const Keypad = () => {
  return (
    <KBox>
      <KButton>C</KButton>
      <KButton>7</KButton>
      <KButton>8</KButton>
      <KButton>9</KButton>
      <KButton>*</KButton>
      <KButton>-</KButton>
      <KButton>4</KButton>
      <KButton>5</KButton>
      <KButton>6</KButton>
      <KButton>/</KButton>
      <KButton>+</KButton>
      <KButton>1</KButton>
      <KButton>2</KButton>
      <KButton>3</KButton>
      <KButton>=</KButton>
      <KButton>.</KButton>
      <KButton>(</KButton>
      <KButton>0</KButton>
      <KButton>)</KButton>
      <KButton>CE</KButton>
    </KBox>
  );
};

export default Keypad;
