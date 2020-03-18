import React from 'react'
import {ChatItem } from 'react-chat-elements';
import {withRouter} from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/es';
//Pasamos moment a español
moment.locale('es');

const ChatItems = ({ item, avatar,history}) => {

    const handleClick = () => {
        history.push(`/admin-page/customer-chat?chatID=admin&room=${item.id_user}`)
    } 

    return (
        <ChatItem
        avatar= {avatar}
        title={`Cliente #${item.id_user}`}
        subtitle= {item.last_message}
        dateString={moment(item.date).utc().format('dddd')}
        unread={item.unread_messages} 
        onClick={handleClick}
        />
    )
}

export default withRouter (ChatItems);
