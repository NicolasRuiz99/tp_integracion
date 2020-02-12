import React, {Fragment, useState, useEffect} from 'react'
import 'react-chat-elements/dist/main.css';
import avatar from '../../../assets/avatar.png';
import BreadCrumbs from '../../BreadCrumbs';
import {getChats} from './../utils/adminFunctions';
import Error from '../../messages/Error';
import ChatItems from '../list/chat/ChatItems';
import uuid from 'uuid';
import LoadingDark from '../../messages/LoadingDark';

export default function Chats() {
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getChats()
        .then(res => {
            console.log(res);
            setList(res);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
    }, []);

    return (
        <Fragment>
            <BreadCrumbs name="Conversaciones" isAdmin={true} />
            {(loading) ? (
                <LoadingDark/>
            ) :
            ((error) ? (<Error texto="Ha ocurrido un error en la obtención de datos" />) : (
                <div>
                {list.map(item => (
                    <ChatItems
                    id={uuid()}
                    item={item}
                    avatar={avatar} />
                ))}   
                </div>
             ))}
        </Fragment>
    )
}
