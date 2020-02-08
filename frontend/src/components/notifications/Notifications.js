import React, {Fragment} from 'react'
import ReactNotification, {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Info from '../messages/Info';


export default function Notifications({title, message}) {
    return (
        <Fragment>
            {store.addNotification({
                title,
                message,
                type: "info",
                container:"top-right",
                insert: 'top',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 2000,
                    showIcon: true
                },
                width: 600,
            })}
            <ReactNotification />
        </Fragment>
    )
}
