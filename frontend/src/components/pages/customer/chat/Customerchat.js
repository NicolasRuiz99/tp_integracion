import React, {useState, Fragment, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import './chat.css';
import './../../../../css/default.css';

import io from 'socket.io-client';
//Componentes del chat
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';
import Messages from './Messages/Messages';
import BreadCrumbs from '../../../BreadCrumbs';
import CustomerSection from '../CustomerSection';

import queryString from 'query-string';

let socket;

const CustomerChat = (props, {user_name}) => {
    const [chatID, setChatID] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const ENDPOINT = 'http://localhost:3001';
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        const {chatID, room} = queryString.parse(props.location.search);
        console.log(`ID: ${chatID}, Sala: ${room}`);
        socket = io(ENDPOINT);
        
        setRoom(room);
        setChatID(chatID)
        
        //En caso de que algo salga mal
        socket.emit('join', { chatID, room }, (error) => {
          if(error) {
            alert(error);
          }
        });
      }, [ENDPOINT, props.location.search]);

      useEffect(() => {
        //Escuchando mensajes
        socket.on('message', (message) => {
          setMessages([...messages, message ]);
        });
    
        socket.on('roomData', ({ users }) => {
          setUsers(users);
        })
    
        return () => {
          socket.emit('disconnect');
    
          socket.off();
        }
      }, [messages])

      const sendMessage = (event) => {
        event.preventDefault();
        
        //Si existe el mensaje lo mandamos
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }
    
    console.log(message, messages);

    return (
        <Fragment>
        <BreadCrumbs name={"Chat general"} />
        <div id="content">
            <div className="container">
            <div className="row bar">
            <div id="customer-account" className="col-lg-8 clearfix">         
                <InfoBar room={room}/>
                <Messages messages={messages} id={chatID} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
                <CustomerSection user_name={user_name}/>
            </div>    
            </div>
        </div>
        </Fragment>
    );
};

export default withRouter(CustomerChat);