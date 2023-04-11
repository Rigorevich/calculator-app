import React from "react";
import {
  HeaderBlock,
  Container,
  Title,
  Navigation,
  List,
  ListItem,
  ItemLink,
  ActiveItemLink,
} from "./styled";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <HeaderBlock>
      <Container>
        <Title>Calculator App</Title>
        <Navigation>
          <List>
            <ListItem>
              {pathname === "/" ? (
                <ActiveItemLink to="/">Home</ActiveItemLink>
              ) : (
                <ItemLink to="/">Home</ItemLink>
              )}
            </ListItem>
            <ListItem>
              {pathname === "/settings" ? (
                <ActiveItemLink to="/settings">Settings</ActiveItemLink>
              ) : (
                <ItemLink to="/settings">Settings</ItemLink>
              )}
            </ListItem>
          </List>
        </Navigation>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
