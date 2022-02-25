import { Suspense, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { CurrentUser } from './components/CurrentUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <h1>Hello assd</h1>
    <Suspense fallback={"loading..."}>
      <CurrentUser/>
    </Suspense>
    </>
  )
}

export default App
