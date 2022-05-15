export const pizzasSelector = (reduxState) => {
  const clonedArray = [...reduxState.pizzas.allPizzas];
  return clonedArray.sort((a, b) => b.bought - a.bought);
};
