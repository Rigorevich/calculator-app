import styled from "styled-components";

export const Title = styled.h3`
  font-size: 30px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 30px;
  color: ${(props) => props.theme.text};
`;

export const Label = styled.span``;

export const DropDownContainer = styled.div`
  width: 15rem;
`;

export const DropDownHeader = styled.div`
  border: 1px solid ${(props) => props.theme.board};
  background: ${(props) => props.theme.btnBg};
  padding: 0.5em 2em 0.5em 1em;
  margin-bottom: 0.2em;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.div`
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.btnBg};
  border: 1px solid ${(props) => props.theme.board};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const ListItem = styled.div`
  list-style: none;
  cursor: pointer;
  transition: opacity easy-it-out 0.2s;
  border-bottom: 1px solid ${(props) => props.theme.board};
  padding: 0.5em 1em;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const Button = styled.button`
  width: 15rem;
  padding: 0.5em 2em 0.5em 1em;
  border: 1px solid ${(props) => props.theme.board};
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  font-weight: 500;
  font-size: 1.3rem;
  background: ${(props) => props.theme.accent};
  text-align: left;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
