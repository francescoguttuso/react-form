import { useState } from "react";
import "./NewItem.css";

export const NewItem = (props) => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  const handleFormChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (formData.author.trim() !== "") {
          props.setItems((items) =>
            items.concat({
              author: formData.author,
              title: formData.title,
              body: formData.body,
              public: formData.public,
            }),
          );
          setFormData({
            author: "",
            title: "",
            body: "",
            public: false,
          });
        }
      }}
    >
      <label htmlFor="author">Inserisci il nome dell'autore:</label>
      <input
        id="author"
        type="text"
        name="author"
        placeholder="Inserisci autore"
        value={formData.author}
        onChange={handleFormChange}
      />
      <label htmlFor="title">Inserisci il titolo del libro:</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Inserisci titolo"
        value={formData.title}
        onChange={handleFormChange}
      />
      <label htmlFor="text">Inserisci un appunto sul libro:</label>
      <input
        id="text"
        type="text"
        name="body"
        placeholder="Inserisci testo"
        value={formData.body}
        onChange={handleFormChange}
      />
      <label className="checkbox" htmlFor="checkbox">
        libro letto
        <input
          id="checkbox"
          type="checkbox"
          name="public"
          placeholder="Inserisci testo"
          checked={formData.public}
          onChange={handleFormChange}
        />
      </label>

      <button type="submit">Aggiungi alla mia Libreria</button>
    </form>
  );
};
