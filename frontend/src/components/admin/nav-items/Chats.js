import React, {Fragment} from 'react'
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements';
import avatar from '../../../assets/avatar.png';
import moment from 'moment';
import BreadCrumbs from '../../BreadCrumbs';

export default function Chats() {
    return (
        <Fragment>
            <BreadCrumbs name="Conversaciones" isAdmin={true} />
            <ChatList
            className='chat-list'
            dataSource={[
            {
            avatar: avatar,
            title: 'ID del cliente',
            subtitle: 'Hola admin',
            date: new Date(),
            unread: 0,
            },
            {
            avatar: avatar,
            title: 'ID del cliente',
            subtitle: 'Contestame, perra',
            date: new Date(),
            unread: 2,
            },
            {
            avatar: avatar,
            title: 'ID del cliente',
            subtitle: 'Me garcaste con las zapas',
            date: new Date(),
            unread: 1,
            },
            {
            avatar: avatar,
            title: 'ID del cliente',
            subtitle: 'que eliminas mi reviu? hijo de mil puta',
            date: moment('01/02/2020'),
            unread: 0,
            },
            ]} 
        />
        </Fragment>
    )
}
