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

      <NewItem
        setItems={setItems}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
    </>
  );
}

export default App;
