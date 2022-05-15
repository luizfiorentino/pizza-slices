import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantsWithPizzas } from "../../store/selectors";

export default function RestaurantList() {
  const restaurants = useSelector(selectRestaurantsWithPizzas);
  const dispatch = useDispatch();

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
    </div>
  );
}
