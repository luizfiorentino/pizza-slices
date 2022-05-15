import "./App.css";
import PizzaList from "./components/PizzaList/index";
import { AddPizzaForm } from "./components/AddPizza/";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;
