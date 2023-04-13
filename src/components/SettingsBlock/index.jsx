import React from "react";
import { themes } from "Constants";
import { toggleTheme } from "Store/actions/themeActions";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Title,
  DropDownContainer,
  Label,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Button,
} from "./styled";

const SettingsBlock = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleSelect = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickInside = (option) => () => {
    dispatch(toggleTheme(option));
    setIsOpen(false);
  };

  return (
    <Container ref={containerRef}>
      <Title>Settings</Title>
      <DropDownContainer className="dropdown">
        <Label>Switch theme</Label>
        <DropDownHeader onClick={toggleSelect}>{theme.name}</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {themes.map((option) => (
                <ListItem onClick={handleClickInside(option)} key={option.name}>
                  {option.name} Theme
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <Button>Clear all history</Button>
    </Container>
  );
};

export default SettingsBlock;
