import { useState } from 'react'
import { StyledEngineProvider,CssBaseline, } from '@mui/material'
//import './App.css'



import ChatWindow from './copmponents/ChatWindow'
import {Button} from '@mui/material'
//import ChatBot from './copmponents/ChatBot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <StyledEngineProvider injectFirst>
          <CssBaseline/>
          <div style={{display:"flex",justifyContent:"right",float:"right"}}>
           {count && <ChatWindow/>}

           <Button style={{float:"left"}}onClick={()=>{setCount(!count)}}>chat</Button>
           {/* <ChatBot/> */}
           </div>
        </StyledEngineProvider>
    </>
  )
}

export default App
