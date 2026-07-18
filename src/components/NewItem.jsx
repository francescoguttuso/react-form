import { useState } from "react";
import "./NewItem.css";

export const NewItem = (props) => {
  const [formData, setFormData] = useState({
    inputAuthor: "",
    inputTitle: "",
    inputBody: "",
    inputPublic: "",
  });

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
        name="inputAuthor"
        placeholder="Inserisci autore"
        value={inputAuthor}
        onChange={(e) => setInputAuthor(e.target.value)}
      />
      <input
        type="text"
        name="inputTitle"
        placeholder="Inserisci titolo"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <input
        type="text"
        name="inputBody"
        placeholder="Inserisci testo"
        value={inputBody}
        onChange={(e) => setInputBody(e.target.value)}
      />

      <button type="submit">Invia</button>
    </form>
  );
};
