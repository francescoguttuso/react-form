import { useState } from "react";
import "./App.css";
import { Items } from "./components/Items";
import { NewItem } from "./components/NewItem";

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <h2>LA MIA LIBRERIA</h2>
      <p>La mia lista di libri letti e da leggere</p>
      <Items items={items} setItems={setItems} />

      <NewItem setItems={setItems} />
    </>
  );
}

export default App;
