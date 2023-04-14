import styled from "styled-components";

export const KBox = styled.div`
  padding: 20px 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 140px;
  row-gap: 40px;

  @media (max-width: 1600px) {
    column-gap: 60px;
  }

  @media (max-width: 1075px) {
    column-gap: 30px;
    row-gap: 40px;
    padding: 30px 40px;
  }
`;

export const KButton = styled.button`
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

  @media (max-width: 1075px) {
    width: 100px;
    height: 100px;
    font-size: 32px;
  }
`;
