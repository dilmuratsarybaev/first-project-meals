import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";

export const TotalAmount = ({ price, onClose, onOrder }) => {
  const orderButton = price > 0 && <Button onClick={onOrder}>Order</Button>;
  const fixedPrice = price.toFixed(2);
  return (
    <div>
      <InfoContainer>
        <Label>Total Amount</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>
      <ActionButtonContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {orderButton}
      </ActionButtonContainer>
    </div>
  );
};

const Label = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin: 0;
`;
const Price = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
  margin: 0;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 28px;
`;
const ActionButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
