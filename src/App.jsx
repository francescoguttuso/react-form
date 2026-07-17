import { useState } from "react";
import "./App.css";
import { Items } from "./components/Items";
import { NewItem } from "./components/NewItem";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Items items={items} />

      <NewItem />
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
