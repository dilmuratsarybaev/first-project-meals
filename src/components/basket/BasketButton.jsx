import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Vector.svg";

export const BasketButton = ({ count, ...restProps }) => {
  // console.log(count);
  return (
    <StyledButton {...restProps}>
      <BasketIcon />
      <Span>
        Your cart <StyledCounter>{count || 0}</StyledCounter>
      </Span>
    </StyledButton>
  );
};
const StyledButton = styled.button`
  background: #5a1f08;
  border-radius: 30px;
  padding: 10px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #2c0d00;
  }
  cursor: pointer;
`;
const Span = styled.span`
  margin-left: 12px;
`;
const StyledCounter = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 15px;
  margin-left: 16px;
`;
