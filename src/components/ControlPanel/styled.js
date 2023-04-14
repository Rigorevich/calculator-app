import styled from "styled-components";
import svg from "Assets/history.svg";

export const CIcon = styled.img`
  position: absolute;
  right: 15px;
  width: 30px;
  cursor: pointer;
  transition: opacity 0.2s;
  filter: invert(${(props) => props.theme.invert});

  &:hover {
    opacity: 0.6;
  }
`;

CIcon.defaultProps = {
  src: svg,
  alt: "History",
};
