import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="Lista">
        <ul>
          {items.map((item) => (<li key={item}>{item}</li>))};
        </ul>
      </div>

      <form>
        <input
          type="text"
          placeholder="Inserisci nuovo elemento"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Invia</button>
      </form >
    </>
  )
}

export default App
