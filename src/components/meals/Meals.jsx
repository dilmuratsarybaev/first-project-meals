import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchApi } from "../../lib/fatchApi";
import { MealItem } from "./meal-Item/MealItem";
console.log(Date.now());

const DUMMY_MEALS = [
  {
    id: Date.now().toString(),
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: Math.random().toString(),
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.99,
  },
  {
    id: Math.random().toString(),
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: Math.random().toString(),
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];
export const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const getMeals = async () => {
    try {
      setIsLoading(true);
      const response = await fetchApi("foods");
      setMeals(response.data);
      setIsLoading(false);
    } catch (error) {
      setError("Failed to load meals");
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <Card>
      {isLoading && !error && <p>Loading ..........</p>}
      <ul>
        {meals.map((meal) => {
          return <MealItem meal={meal} />;
        })}
      </ul>
    </Card>
  );
};

const Card = styled.div`
  width: 64.9375rem;
  background: #ffffff;
  border-radius: 16px;
  margin: 135px auto;
  padding: 18px 40px 10px 40px;
`;
