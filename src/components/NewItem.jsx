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
      [e.target.name]: e.target.value,
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
      <input
        type="text"
        name="author"
        placeholder="Inserisci autore"
        value={formData.author}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Inserisci titolo"
        value={formData.title}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="body"
        placeholder="Inserisci testo"
        value={formData.body}
        onChange={handleFormChange}
      />
      <input
        type="checkbox"
        name="public"
        placeholder="Inserisci testo"
        checked={formData.public}
        onChange={handleFormChange}
      />

      <button type="submit">Invia</button>
    </form>
  );
};
