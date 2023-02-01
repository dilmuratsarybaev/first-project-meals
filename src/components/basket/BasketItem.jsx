import styled from "styled-components";

import { Button } from "../UI/Button";
export const BasketItem = ({ item, incrementAmount, decrementAmount }) => {
  return (
    <Container>
      <Title>{item.title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${item.price.toFixed(2)}</Price>
          <Amount>x{item.amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <Button
            borderStyled="squred"
            variant="outlined"
            onClick={decrementAmount}
          >
            -
          </Button>
          <Button
            borderStyled="squred"
            variant="outlined"
            onClick={incrementAmount}
          >
            +
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #d6d6d6;
`;
const Title = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin: 0;
  color: #ad5502;
`;
const Amount = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  display: block;
  padding: 6px 14px;
`;

const PriceAndAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 153px;
`;
const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
