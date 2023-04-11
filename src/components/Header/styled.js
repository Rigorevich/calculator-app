import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBlock = styled.header`
  background-color: ${(props) => props.theme.primary};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;

export const Title = styled.h2`
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const ListItem = styled.li``;

export const ItemLink = styled(Link)`
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.text};
  line-height: 1.5;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    transition: all 0.3s;
    background-color: ${(props) => props.theme.accent};
  }

  &.active::after,
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

export const ActiveItemLink = styled(ItemLink)`
  & {
    color: ${(props) => props.theme.accent};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: ${(props) => props.theme.accent};
    width: 100%;
    left: 0;
  }
`;
