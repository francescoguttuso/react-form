import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="Lista">
        <ol>
          <li>Jeans</li>
          <li>Maglia</li>
          <li>Pantaloncini</li>
          <li>Scarpe</li>
        </ol>
      </div>

      <form className="form">
        <input type="text" placeholder="Inserisci nuovo elemento" />
        <button type="submit">Invia</button>
      </form >
    </>
  )
}

export default App
