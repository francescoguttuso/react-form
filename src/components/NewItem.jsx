import { useState } from "react";
import "./NewItem.css";

export const NewItem = (props) => {
  const [formData, setFormData] = useState({
    inputAuthor: "",
    inputTitle: "",
    inputBody: "",
    inputPublic: false,
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (formData.inputAuthor.trim() !== "") {
          props.setItems((items) =>
            items.concat({
              author: formData.inputAuthor,
              title: formData.inputTitle,
              body: formData.inputBody,
            }),
          );
          setFormData({
            inputAuthor: "",
            inputTitle: "",
            inputBody: "",
            inputPublic: "",
          });
        }
      }}
    >
      <input
        type="text"
        name="inputAuthor"
        placeholder="Inserisci autore"
        value={formData.inputAuthor}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="inputTitle"
        placeholder="Inserisci titolo"
        value={formData.inputTitle}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="inputBody"
        placeholder="Inserisci testo"
        value={formData.inputBody}
        onChange={handleFormChange}
      />

      <button type="submit">Invia</button>
    </form>
  );
};
