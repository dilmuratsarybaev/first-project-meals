import React from "react";
import styled from "styled-components";
export const Button = ({
  children,
  variant = "contained",
  borderStyled = "rounded",
  ...rest
}) => {
  return <StyledButton variant={variant} borderStyled={borderStyled} {...rest}>{children}</StyledButton>;
};
const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#7e2a0a" : "white";
};
const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : "#7e2a0a";
};
const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #7e2a0a";
};
const getBorderRadius = (props) => {
  return props.borderStyled === "rounded" ? "20px" : "6px";
};

const StyledButton = styled.button`
  background: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  padding: 8px 24px;
  font-size: 16px;
  line-height: 25px;
  color: ${getColor};
  border: ${getBorder};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  &:hover {
    background-color: #7e2a0a;
    color: #fff;
  }
  &:active {
    background-color: #993108;
  }
  &:disabled {
    background-color: #cac6c4;
  }
`;
