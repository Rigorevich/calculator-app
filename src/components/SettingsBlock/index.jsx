import React, { useState, useRef, useEffect } from "react";
import { themes } from "Constants";
import { toggleTheme } from "Store/actions/themeActions";
import { clearHistory } from "Store/actions/operationActions";
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
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleClickInside = (option) => {
    dispatch(toggleTheme(option));
    setIsOpen(false);
  };

  return (
    <Container>
      <Title>Settings</Title>
      <DropDownContainer ref={menuRef} className="dropdown">
        <Label>Switch theme</Label>
        <DropDownHeader
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {theme.name}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {themes.map((option) => (
                <ListItem
                  key={option.name}
                  onClick={() => handleClickInside(option)}
                >
                  {option.name} Theme
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <Button onClick={() => dispatch(clearHistory())}>
        Clear all history
      </Button>
    </Container>
  );
};

export default SettingsBlock;
