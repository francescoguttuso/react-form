import { useState } from "react";
import "./NewItem.css";

export const NewItem = (props) => {
  const [inputAuthor, setInputAuthor] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputAuthor.trim() !== "") {
          props.setItems((items) => items.concat(inputAuthor));
          setInputAuthor("");
        }
      }}
    >
      <input
        type="text"
        placeholder="Inserisci autore"
        value={inputAuthor}
        onChange={(e) => setInputAuthor(e.target.value)}
      />
      <button type="submit">Invia</button>
    </form>
  );
};
