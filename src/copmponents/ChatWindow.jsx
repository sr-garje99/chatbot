import React from 'react'
import { Card, TextField,Input,Button } from '@mui/material'
const ChatWindow = () => {
  return (
    <>
    <Card>
    <div className='Card' style={{width:"30rem",hright:"100rem",backgroundColor:"white",border:"solid",}}>
          <div style={{height:"5rem",width:"30rem",border:"solid"}}>
                Header
        </div>
        <div style={{height:"30rem"}}>
            ChatWindow
        </div>
        <div style={{height:"5rem",width:"30rem",display:"flex"}}>
          <Input style={{height:"5rem",width:"20rem",border:"solid"}}>
          <TextField>
          Input
          </TextField>
          </Input>
          <Button style={{height:"5rem",width:"10rem",border:"solid"}}>
            send
          </Button>
            
        </div>
    </div>
    </Card>
    </>

  )
}

export default ChatWindow