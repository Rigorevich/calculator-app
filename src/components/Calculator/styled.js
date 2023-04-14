import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  column-gap: 12px;
  padding-top: 10px;
  padding-bottom: 10px;

  height: calc(100vh - 80px);

  @media (max-width: 1299.98px) {
    grid-template-columns: 1fr;
  }
`;

export const CalculatorBlock = styled.div`
  padding: 0.5rem 1rem;
  position: relative;
`;

export const HistoryBlock = styled.div`
  border-left: 2px solid ${(props) => props.theme.board};
  padding: 20px 30px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    background-color: transperent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 3px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`;
