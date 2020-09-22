import React from "react";
import { useDispatch, useSelector } from "react-redux";

const sortByBought = (pizzaA, pizzaB) => {
  return pizzaB.bought - pizzaA.bought;
};

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  return [...reduxState.pizzas].sort(sortByBought);
};

const displayFavorite = (user, pizza) =>
  user.favorites.includes(pizza.id) ? "♥" : "♡";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();

  function toggleFavorite(pizzaId) {
    console.log("PIZZA ID:", pizzaId);
    // 1. create an action { type: "TOGGLE_FAVORITE", payload: pizzaId }
    const action = { type: "TOGGLE_FAVORITE", payload: pizzaId };
    // 2. dispatch the action
    dispatch(action);
  }

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
                <button onClick={() => toggleFavorite(pizza.id)}>
                  {displayFavorite(user, pizza)}
                </button>
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
