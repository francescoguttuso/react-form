import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><ol>
      <li>Jeans</li>
      <li>Maglia</li>
      <li>Pantaloncini</li>
      <li>Scarpe</li>
    </ol>
    </>
  )
}

export default App
