import React from 'react';
import Button from '@mui/material/Button'

import TicketIcon from '../../resources/images/icons/ticket.png'
 const MyButton=(props)=>{
    return <Button
    style={{
        background:'#8e8e8e',
        color:"#ffffff",
        ...props.style
    }}
    href = {props.link}
    variant="contained"
    size={props.size?props.size:'large'}
    >
    {props.iconTicket?
        <img
        src={TicketIcon} 
        className="iconImage"
    />:null
    }
    
        {props.text}
    </Button>
 }
 export default MyButton