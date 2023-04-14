import styled from "styled-components";

export const HBox = styled.div``;

export const HTitle = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.text};
`;

export const HList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  color: ${(props) => props.theme.text};
`;

export const HItem = styled.li`
  font-size: 26px;
  font-weight: 500;
`;
