import { useState } from "react";
import { useDispatch } from "react-redux";
import { pizzasSelector } from "../../store/pizzas/selectors";
import { addPizza } from "../../store/pizzas/slice";

const AddPizzaForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submit = (event) => {
    event.preventDefault();

    console.log("new pizza", name, description);

    const newPizza = { name, description };

    dispatch(addPizza(newPizza));
    console.log(newPizza);

    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={submit}>
      <h3>Add a new pizza</h3>
      <p>
        <label>
          Name: {""}
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description: {""}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <button type="submit"> Add it! </button>
      <p></p>
    </form>
  );
};

export { AddPizzaForm };
