import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ComponenteA } from './components/ComponenteA'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <ComponenteA/>
    </div>
  )
}

export default App
