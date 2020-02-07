import React from 'react'
import {ChatItem } from 'react-chat-elements';
import moment from 'moment';
import 'moment/locale/es';
//Pasamos moment a español
moment.locale('es');

export default function ChatItems({ item, avatar}) {
    return (
        <ChatItem
        avatar= {avatar}
        title={`Cliente #${item.id_user}`}
        subtitle= {item.last_message}
        dateString={moment(item.date).utc().startOf('day').fromNow()}
        unread={item.unread_messages} />
    )
}
