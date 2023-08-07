import React from 'react'
import './Messenger.css'

const MessageDisplayer=(props)=>{
    return(
        <div className='message_displayer'>
            {props.message}

        </div>
    )
}

export default MessageDisplayer