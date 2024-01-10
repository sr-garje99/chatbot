import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatWindow from './copmponents/ChatWindow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
           {count && <ChatWindow/>}
           <buutton style={{float:"right"}}onClick={()=>{setCount(!count)}}>chat</buutton>
    </>
  )
}

export default App
