import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  column-gap: 12px;
  padding: 10px 30px;

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
`;
