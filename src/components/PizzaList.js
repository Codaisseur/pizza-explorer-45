import React from "react";
import { useSelector } from "react-redux";

const sortByBought = (pizzaA, pizzaB) => {
  return pizzaB.bought - pizzaA.bought;
};

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  return [...reduxState.pizzas].sort(sortByBought);
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      <p>Please choose from the following {pizzas.length} pizzas:</p>
      <ul>
        {pizzas.map((pizza) => {
          return (
            <li key={pizza.id}>
              <p>
                <strong>{pizza.name}</strong> ({pizza.description}){" "}
                <button>♡</button>
              </p>
              <p>
                <i>Bought {pizza.bought} times</i>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
