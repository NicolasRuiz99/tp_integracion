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
import { readAllChatMessages } from '../utils/CustomerFunctions';

let socket;

const CustomerChat = (props) => {
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

        //leemos todos los mensajes del chat

        if (room != props.user_id){
          readAllChatMessages (room,room)
          .then (res => console.log(res))
          .catch (err => console.log(err))
        }else{
          readAllChatMessages (room,props.user_id)
          .then (res => console.log(res))
          .catch (err => console.log(err))
        }
        
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
          setMessages(messages => [...messages, message ]);
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
        let data = {user_id:props.user_id,message}
        //Si existe el mensaje lo mandamos
        if(message) {
          socket.emit('sendMessage', data, () => setMessage(''));
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
                {(chatID === 'admin')?null:<CustomerSection user_id={props.user_id}/>}
            </div>    
            </div>
        </div>
        </Fragment>
    );
};

export default withRouter(CustomerChat);