import React from "react";
import styled from "styled-components";

export const SummaryCard = () => {
  return (
    <Card>
      <StyledTitle>Delicious Food, Delivered To You</StyledTitle>
      <StyledParagraphOne>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </StyledParagraphOne>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </p>
    </Card>
  );
};

const Card = styled.div`
  max-width: 53.375rem;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 36px 54px;
  position: relative;
  margin: -12rem auto;
  color: white;
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;
const StyledParagraphOne = styled.p`
  margin-top: 28px;
  margin-bottom: 20px;
`;

const StyledTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
`;
