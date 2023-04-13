import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 12px;
  padding: 10px 30px;
`;

export const CalculatorBlock = styled.div`
  padding: 0.5rem 1rem;
  //   border: 10px dashed red;
`;

export const HistoryBlock = styled.div`
  border: 10px dashed blue;
`;

// Display

export const DisplayBox = styled.div``;

export const DisplayInput = styled.input`
  width: 100%;
  padding: 15px 80px;
  text-align: end;
  font-size: 40px;
  border: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-bottom: 2px solid ${(props) => props.theme.board};

  &:focus,
  &:active {
    outline: none;
  }
`;

// Keypad

export const KeypadBox = styled.div`
  padding: 20px 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 150px;
  row-gap: 40px;
`;

export const Button = styled.button`
  width: 120px;
  height: 120px;
  font-size: 42px;
  font-weight: 500;
  border-radius: 20px;
  background-color: ${(props) => props.theme.btnBg};
  border: 2px solid ${(props) => props.theme.board};
  color: ${(props) => props.theme.text};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    box-shadow: 2px 2px 1px ${(props) => props.theme.accent};
  }
`;
