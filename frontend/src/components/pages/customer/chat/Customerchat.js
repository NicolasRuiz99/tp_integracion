import React, {useState, Fragment} from 'react';
import {TokenProvider, ChatManager} from "@pusher/chatkit-client-react"
import './style.css';
import CustomerAccount from '../CustomerAccount';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import Title from './Title';
import { ChatkitProvider } from '@pusher/chatkit-client-react/dist/provider';

// const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dfaf1e22-2d33-45c9-b4f8-31f634621d24/token"
// const instanceLocator = "v1:us1:dfaf1e22-2d33-45c9-b4f8-31f634621d24"
// const roomId = 9806194
// const username = 'perborgen'

class CustomerChat extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    } 
    
    componentDidMount() {
        const chatManager = new ChatkitProvider({
            instanceLocator: instanceLocator,
            userId: 'janedoe',
            tokenProvider: new TokenProvider({
                url: testToken
            })
        })
        
        ChatkitProvider.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {

                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
      })
    }
    
    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: roomId
        })
    }
    
    render() {
        return (
            <Fragment>
              <Title />
              <MessageList 
                  roomId={this.state.roomId}
                  messages={this.state.messages} />
              <SendMessageForm
                  sendMessage={this.sendMessage} />
            </Fragment>
        );
    }
}

export default CustomerChat;