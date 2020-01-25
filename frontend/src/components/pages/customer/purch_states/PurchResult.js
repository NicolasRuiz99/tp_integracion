import React,{useEffect,useState} from 'react';
import {setPurchaseState} from '../utils/CustomerFunctions';

const PurchResult = ({props,type}) => {

    const [error,setError] = useState (false);

    useEffect (()=>{
        const id = props.match.params.id;
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
    },[])

    switch (type){
        case 1:
            return (
                <div className="alert alert-success mt-2 mb-5 text-center">{(error)?'Ocurrio un error':'Compra realizada con éxito'}</div>
            );
        case 2:
            return (
                <div className="alert alert-success mt-2 mb-5 text-center">{(error)?'Ocurrio un error':'Compra pendiente'}</div>
            );
        case 3:
            return (
                <div className="alert alert-success mt-2 mb-5 text-center">{(error)?'Ocurrio un error':'Compra cancelada'}</div>
            );
    }
}

export default PurchResult;
