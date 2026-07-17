import { useState } from "react";
import "./App.css";
import { Items } from "./components/Items";
import { NewItem } from "./components/NewItem";

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <Items items={items} />

      <NewItem setItems={setItems} />
    </>
  );
}

export default App;
