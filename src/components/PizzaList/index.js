import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { pizzasSelector } from "../../store/pizzas/selectors";
import { toggleFavorites } from "../../store/user/slice";
import "./styles.scss";

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pizza = useSelector(pizzasSelector);

  return (
    <div className="pizza-list">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!!!
      </p>
      <p>We have {pizza.length} options of pizza for you ;)</p>
      <p> :: Our Flavors ::</p>

      <ul className="pizzas">
        {pizza.map((pizza) => (
          <li
            key={pizza.id}
            className="pizza"
            style={{ backgroundImage: `url(${pizza.image})` }}
          >
            <h4>{pizza.name}</h4>
            <button
              onClick={() => dispatch(toggleFavorites(pizza.id))}
              className={`fav-toggle ${
                user.favorites.includes(pizza.id) ? "fav" : ""
              }`}
            >
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
            <div className="overlay">
              <h6>id: {pizza.id}</h6>
              <p>{pizza.description}</p>
              <span>
                Bought <strong>{pizza.bought}</strong> times!
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
