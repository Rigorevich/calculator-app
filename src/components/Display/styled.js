import styled from "styled-components";

export const DBox = styled.div``;

export const DInput = styled.input`
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
