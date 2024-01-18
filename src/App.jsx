import { useState } from 'react'
import { StyledEngineProvider,CssBaseline, } from '@mui/material'
//import './App.css'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'


import ChatWindow from './copmponents/ChatWindow'
import {Button} from '@mui/material'
import MyComponent from './copmponents/MyComponent'
//import ChatBot from './copmponents/ChatBot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <StyledEngineProvider injectFirst>
          <CssBaseline/>
          <div style={{display:"flex",justifyContent:"right",float:"right"}}>
           
           {/* {count && <ChatWindow/>} */}

           {/* <Button style={{float:"left"}}onClick={()=>{setCount(!count)}}>chat</Button> */}
           {/* <ChatBot/> */}
           <MyComponent/>
           </div>
        </StyledEngineProvider>
    </>
  )
}

export default App
