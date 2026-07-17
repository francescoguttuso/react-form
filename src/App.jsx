import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);


  return (
    <>
      <div className="Lista">
        <ul>
          {items.map((item) => (<li key={item}>{item}</li>))};
        </ul>
      </div>

      <form className="form">
        <input type="text" placeholder="Inserisci nuovo elemento" />
        <button type="submit">Invia</button>
      </form >
    </>
  )
}

export default App
