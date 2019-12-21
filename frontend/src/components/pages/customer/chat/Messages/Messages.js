import React, { useEffect} from 'react';
import Message from './Message/Message';
import './messages.css';

const Messages = ({ messages, id }) => {
  
  useEffect(() => {
    let msjDiv = document.getElementById("mensajes");
     msjDiv.scrollTop = msjDiv.scrollHeight;
  },[messages]);
  
  return(
  <div className="messages" id="mensajes" >
    {messages.map((message, i) =><div key={i} ><Message message={message} id={id}/></div>
    )}
  </div>
  );
};

export default Messages;