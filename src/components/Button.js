import styled from "styled-components";
import { Link } from "react-scroll";

const Button = styled(Link)`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 14px 48px;
  color: #010606;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-in-out;
    background-color: #fff;
  }
`;

export default Button;
