import "./App.css";
import PizzaList from "./components/PizzaList/index";
import { AddPizzaForm } from "./components/AddPizza/";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
      <RestaurantList />
    </div>
  );
}

export default App;
