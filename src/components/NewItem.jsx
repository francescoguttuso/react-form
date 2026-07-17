import { useState } from "react";
import "./NewItem.css";

export const NewItem = (props) => {
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [inputPublic, setInputPublic] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputAuthor.trim() !== "") {
          props.setItems((items) =>
            items.concat({ inputAuthor, inputTitle, inputBody }),
          );
          setInputAuthor("");
          setInputTitle("");
          setInputBody("");
        }
      }}
    >
      <input
        type="text"
        placeholder="Inserisci autore"
        value={inputAuthor}
        onChange={(e) => setInputAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Inserisci titolo"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Inserisci testo"
        value={inputBody}
        onChange={(e) => setInputBody(e.target.value)}
      />

      <button type="submit">Invia</button>
    </form>
  );
};
