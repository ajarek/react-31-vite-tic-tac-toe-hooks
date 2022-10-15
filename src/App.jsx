import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Squares } from './components/Squares/Squares'

function App() {
  const[turn, setTurn]=useState('')
  return (
    <div className='App'>
      <Header player={turn}/>
      <Squares/>
    </div>
  )
}

export default App
