import React from 'react';

import './input.css';

const Input = ({ setMessage, sendMessage, message }) => {
  
  return(
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Escribe un mensaje..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Enviar</button>
  </form>
  );
}

export default Input;