import React, { useState, useEffect, Fragment } from 'react'
import ReservationList from './../list/reservation/ReservationList';
import Error from './../../messages/Error';
import {getReservations} from './../utils/adminFunctions';
import { getReservation } from '../../pages/customer/utils/CustomerFunctions';
import { ReservationDetailModal } from '../utils/modals';
import LoadingDark from '../../messages/LoadingDark';
import moment from 'moment';

export default function Products() {
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [copyList, setCopyList] = useState([]);
    const [search, setSearch] = useState('');
    const [loading,setLoading] = useState (false);
    const [modalOpen, setModalOpen] = useState(false);
    const [reserva, setReserva] = useState({});
    const [lista, setLista] = useState([]);
    const [show, setHide] = useState(false);
    const [today] = useState(moment(new Date()).utc().format('DD/MM/YYYY'));

    const handleModalOpen = (reservation) => {
        if(reservation !== null){
            setReserva(reservation);
        }
        setModalOpen(!modalOpen);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        getReservations()
        .then(res => {
            console.log(res);
            setList(res);
            setCopyList(res);
            //Listado del reporte de las reservas del dia
            res = res.filter(item =>{
              return moment(item.date).utc().format('DD/MM/YYYY') === today
            });
            if (res.lenght !== 0) {
                setLista(res);
                setHide(true);
            }
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
    }, []);
 
    //UseEffect de busqueda
     useEffect( () => {
         if(search !== '') {
             setCopyList(list.filter(reservation => {
                 return (reservation.name.toLowerCase().includes(search.toLowerCase()) || reservation.color.toLowerCase().includes(search.toLowerCase()));
             }));
       }else{
        setCopyList(list);
         }     
     },[search]);


    return (
        <Fragment>
        {(loading) ? (
                <LoadingDark/>
            ) : ((error) ? 
                <Error texto="ha ocurrido un error" /> : 
                <ReservationList 
                setSearch={setSearch} 
                copyList={copyList} list={list} 
                handleModalOpen={handleModalOpen} lista={lista}
                show={show} />)}

        <ReservationDetailModal
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        reserva={reserva} 
        />
        </Fragment>
    )
}
