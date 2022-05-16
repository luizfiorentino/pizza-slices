export const restaurantsSelector = (reduxState) => {
  const clonedArray = [...reduxState.restaurants.all];
  return clonedArray.sort((restaurant_a, restaurant_b) =>
    restaurant_a.name.localeCompare(restaurant_b.name)
  );
};

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.all.filter((restaurant) =>
    restaurant.pizzas.includes(pizzaId)
  );
};
