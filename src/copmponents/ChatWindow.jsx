import React from 'react'
import { Card } from '@mui/material'
const ChatWindow = () => {
  return (
    <>
    <Card>
    <div className='Card' style={{width:"30rem",hright:"100rem",backgroundColor:"skyblue",border:"1rem",
       borderBlockColor:"white" }}>
          <div>
                Header
        </div>
        <div style={{height:"50rem"}}>
            ChatWindow
        </div>
        <div>
            Input
        </div>
    </div>
    </Card>
    </>

  )
}

export default ChatWindow