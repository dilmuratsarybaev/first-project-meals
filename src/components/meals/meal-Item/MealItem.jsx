import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../../UI/Button";
import { ReactComponent as PlusIcon } from "../../../assets/icons/Vector3.svg";
import { BasketContext } from "../../../store/BasketContext";
export const MealItem = ({ meal }) => {
  const { addToBasket } = useContext(BasketContext);

  const [amount, setAmount] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();

    const basketItem = {
      id: meal._id,
      price: meal.price,
      title: meal.title,
      amount: +amount,
    };
    console.log(basketItem)
    addToBasket(basketItem);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  return (
    <Container key={meal._id}>
      <StyledItemInfo>
        <StyledTitle>{meal.title}</StyledTitle>
        <ParagraphStyle>{meal.description}</ParagraphStyle>
        <StyledNumber>${meal.price}</StyledNumber>
      </StyledItemInfo>

      <ContainerCount>
        <div>
          <Label htmlFor={meal.id}>Amount</Label>
          <StyledInput
            type="number"
            id={meal.id}
            min={1}
            max={5}
            defaultValue={1}
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>

        <Button onClick={submitHandler}>
          <StyledIcon />
          Add
        </Button>
      </ContainerCount>
    </Container>
  );
};

const StyledItemInfo = styled.div`
  p {
    font-family: "Poppins";
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }
  margin-bottom: 20px;
  margin-top: 24px;
`;
const StyledTitle = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin-bottom: 4px;
`;
const StyledNumber = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ad5502;
`;

const ContainerCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const StyledInput = styled.input`
  width: 60px;
  padding-left: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 1.2rem;
  margin-bottom: 12px;
`;
const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
const ParagraphStyle = styled.p`
  margin-bottom: 4px;
`;
const Container = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  :last-child {
    border-bottom: none;
    margin-bottom: 0rem;
  }
`;
const Label = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin-right: 20px;
`;
