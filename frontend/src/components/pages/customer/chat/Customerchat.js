import React, {useState, Fragment, useEffect} from 'react';
import './chat.css';
import './../../../../css/default.css';

import io from 'socket.io-client';
//Componentes del chat
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';
import Messages from './Messages/Messages';
import BreadCrumbs from '../../../BreadCrumbs';
import CustomerSection from '../CustomerSection';

let socket;

const CustomerChat = (props) => {
    const [chatID, setChatID] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const ENDPOINT = 'http://localhost:3001';
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { chatID, room } = props.match.params;
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
      }, [ENDPOINT, props.match.params]);

      useEffect(() => {
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
                <CustomerSection />
            </div>    
            </div>
        </div>
        </Fragment>
    );
};

export default CustomerChat;