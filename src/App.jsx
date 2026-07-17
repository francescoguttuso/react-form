import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="Lista">
        <ul>
          {items.map((item) => (
            <li key={item}>
              {item}{" "}
              <button
                onClick={() =>
                  setItems(items.filter((_item) => _item !== item))
                }
              >
                Elimina
              </button>
            </li>
          ))}
        </ul>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue.trim() !== "") {
            setItems((items) => items.concat(inputValue));
            setInputValue("");
          }
        }}
      >
        <input
          type="text"
          placeholder="Inserisci nuovo elemento"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Invia</button>
      </form>
    </>
  );
}

export default App;
