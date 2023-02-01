import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/images/pexels-alexy-almond-3756523 1.jpg";
import { SummaryCard } from "./SummaryCard";
export const Summary = () => {
  return (
    <Container>
      <StyledImage src={BackgroundImg} alt="summary" />
      <SummaryCard />
    </Container>
  );
};

const Container = styled.div`
  height: 432px;
`;

const StyledImage = styled.img`
  height: 432px;
  width: 100%;
`;
