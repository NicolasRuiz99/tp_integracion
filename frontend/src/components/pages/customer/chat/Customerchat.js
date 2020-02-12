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
import { readAllChatMessages,getChat } from '../utils/CustomerFunctions';
import Error from '../../../messages/Error';
import LoadingDark from '../../../messages/LoadingDark';
import Loading from '../../../messages/Loading';

let socket;

const CustomerChat = (props) => {
    const [chatID, setChatID] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const ENDPOINT = 'http://localhost:3001';
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    const [loading,setLoading] = useState (false);
    const [error,setError] = useState (false); 
    
    useEffect(() => {
        setLoading (true);
        const {chatID, room} = queryString.parse(props.location.search);
        getChat (room)
        .then (res => {
            //leemos todos los mensajes del chat

            if (room != props.user_id){
              readAllChatMessages (room,room)
              .then (res => console.log(res))
              .catch (err => console.log(err))
            }else{
              readAllChatMessages (room,res.id_admin)
              .then (res => console.log(res))
              .catch (err => console.log(err))
            }
            setLoading (false);
        })
        .catch (err => {
            setError (true);
            return;
        })
        setError (false);

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
        {(chatID === 'admin')?<BreadCrumbs name={`Chat con cliente #${room}`} isAdmin={true}/>:<BreadCrumbs name={`Chat con administrador`} isAdmin={false}/>}
        <div id="content">
            {(error)? <Error texto="Hubo un error al cargar el chat"/>
            :
            <div className="container">
            <div className="row bar">
            <div id="customer-account" className="col-lg-8 clearfix">     
              {(loading)?
                <div>
                {(chatID === 'admin')?<LoadingDark/>:<Loading/>}
                </div>
                :    
                <div>
                <InfoBar room={room}/>
                <Messages messages={messages} id={chatID} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
                }
            </div>
            {(chatID === 'admin')?null:<CustomerSection user_id={props.user_id}/>}
            </div>    
            </div>
            }
        </div>
        </Fragment>
    );
};

export default withRouter(CustomerChat);