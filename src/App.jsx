import { useState } from 'react'
import { StyledEngineProvider,CssBaseline, } from '@mui/material'
import './App.css'
import ChatWindow from './copmponents/ChatWindow'
import {Button} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <StyledEngineProvider injectFirst>
          <CssBaseline/>
           {count && <ChatWindow/>}
           <Button style={{float:"right"}}onClick={()=>{setCount(!count)}}>chat</Button>
        </StyledEngineProvider>
    </>
  )
}

export default App
