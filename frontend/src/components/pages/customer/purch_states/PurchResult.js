import React,{useEffect,useState} from 'react';
import {setPurchaseState, getUserInfo} from '../utils/CustomerFunctions';
import { sendPurchaseEMail } from '../../../admin/utils/adminFunctions';
import Error from '../../../messages/Error';
import Info from '../../../messages/Info';
import Success from '../../../messages/Success';

const PurchResult = ({id,type,user_id}) => {

    const [error,setError] = useState (false);
    const [mailError,setMailError] = useState (false);

    useEffect (()=>{
        let state;
        switch (type){
            case 1:
                state = 'success';
                break;
            case 2:
                state = 'pending';
                break;
            case 3:
                state = 'cancelled';
                break;
        }
        setPurchaseState (id,state)
        .then ()
        .catch (err=>{
            setError (true);
            return;
        })
        setError (false);
    },[id])

    useEffect (()=>{
        setMailError (false);
        let state;
        switch (type){
            case 1:
                state = 'completada';
                break;
            case 2:
                state = 'en proceso';
                break;
            case 3:
                state = 'cancelada';
                break;
        }
        getUserInfo (user_id)
        .then (res=>{
            sendPurchaseEMail (res.e_mail,id,state)
            .then (res=>{
                console.log(res);
            })
            .catch (err=>{  
                setMailError (true);
                return;
            })
        })
        .catch (err=>{
            setMailError (true);
            return;
        })
        setMailError (false);
    },[user_id])

    switch (type){
        case 1:
            return (
                <div>
                {(error)?<Error texto="Ocurrió un error, contacta con el administrador"/>:<Success texto="Compra realizada con éxito"/>}
                {(mailError)?<Error texto="Ocurrió un error al enviar las notificaciones"/>:null}
                </div>
            );
        case 2:
            return (
                <div>
                {(error)?<Error texto="Ocurrió un error, contacta con el administrador"/>:<Info texto="Compra pendiente"/>}
                {(mailError)?<Error texto="Ocurrió un error al enviar las notificaciones"/>:null}
                </div>    
            );
        case 3:
            return (
                <div>
                {(error)?<Error texto="Ocurrió un error, contacta con el administrador"/>:<Error texto="Compra cancelada"/>}
                {(mailError)?<Error texto="Ocurrió un error al enviar las notificaciones"/>:null}
                </div> 
            );
    }
}

export default PurchResult;
