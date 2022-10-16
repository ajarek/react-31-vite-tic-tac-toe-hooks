import { useState,createContext } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Squares } from './components/Squares/Squares'
export const AppContext = createContext()
function App() {
  const [status, setStatus] = useState(true)
  return (
    <div className='App'>
      <AppContext.Provider value={{status, setStatus}}>
      <Header player={status?'X':'O'}/>
      <Squares/>
      </AppContext.Provider>
    </div>
  )
}

export default App
