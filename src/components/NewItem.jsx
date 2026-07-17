import { useState } from "react";
import "./NewItem.css";

export const NewItem = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
          props.setItems((items) => items.concat(inputValue));
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
  );
};
