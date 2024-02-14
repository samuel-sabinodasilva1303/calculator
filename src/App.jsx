import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculater';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Calculadora</h1>
    <Calculator />
    </>
  )
}

export default App
