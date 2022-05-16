import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { pizzasSelector } from "../../store/pizzas/selectors";
import { selectRestaurantsWithPizzas } from "../../store/selectors";
import { selectRestaurantsThatSellPizza } from "../../store/restaurants/selectors";

export default function RestaurantList() {
  const restaurants = useSelector(selectRestaurantsWithPizzas);
  const pizzas = useSelector(pizzasSelector);

  const [selectedPizza, setStelectedPizza] = useState(pizzas[0].id);
  const sellPizza = useSelector(selectRestaurantsThatSellPizza(selectedPizza));

  return (
    <div>
      <h1>Restaurants</h1>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <strong>{restaurant.name}</strong>
              <ul>
                {restaurant.pizzas.map((p) => (
                  <li>{p.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <h3>
        {" "}
        Who sells {""}
        <select
          value={selectedPizza}
          onChange={(event) => {
            setStelectedPizza(parseInt(event.target.value));
          }}
        >
          {pizzas.map((pizza) => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>{" "}
        {""}?
      </h3>
      <ul>
        {sellPizza.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
