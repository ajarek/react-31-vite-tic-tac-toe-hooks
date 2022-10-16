import { useState, createContext } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Squares } from './components/Squares/Squares'
import { Result } from './components/Result/Result'

export const AppContext = createContext()
function App() {
  const [status, setStatus] = useState(true)
  const [result, setResult] = useState('')
  return (
    <div className='App'>
      <AppContext.Provider value={{ status, setStatus, setResult }}>
        <Header player={status ? 'X' : 'O'} />
        <Squares />
        <Result result={result} />
      </AppContext.Provider>
    </div>
  )
}

export default App
