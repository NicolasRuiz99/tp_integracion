import React, { useState, useEffect, Fragment } from 'react'
import CouponList from './../list/coupon/CouponList';
import Error from './../../messages/Error';
import {getCoupons, deleteCoupon, addCoupon} from './../utils/adminFunctions';
import {AddCouponModal} from './../utils/modals';
import moment from 'moment';
import LoadingDark from '../../messages/LoadingDark';

export default function Coupons() {
    const [list, setList] = useState([]);
    const [copyList, setCopyList] = useState([]);
    const [error, setError] = useState(false);
    const [loading,setLoading] = useState (false);
    const [modalOpen, setModalOpen] = useState(false);
    const [serverError,setServerError] = useState(false);
    const [refresh,setRefresh] = useState (false);
    const [search, setSearch] = useState('');
    const [dateError,setDateError] = useState (false);

    const handleModalOpen = () => {
      setModalOpen(!modalOpen);
      setError(false);  
     };

    useEffect(() => {
        setRefresh (false);
        setLoading(true);
        getCoupons()
        .then(res => {
            console.log(res);
            setList(res);
            setCopyList(res);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
    }, [refresh]);

     //UseEffect de busqueda
     useEffect( () => {
        if(search !== '') {
            setCopyList(list.filter(cupon => {
              return (cupon.pc.toString().includes(search));
            }));
      }else{
       setCopyList(list);
        }     
   },[search]);

   const agregarCupon = (pc, date) => {
       setDateError (false);
       let cad_date = moment(date).format('MM/DD/YYYY');
       addCoupon({pc, cad_date})
       .then(res => {
            handleModalOpen(null);
           setRefresh(true);
       })
       .catch(err => {
           if (err.type.includes('fecha de vencimiento inválida')){
                setDateError (true);
           }else{
            setError(true);
           }       
           return;
       });
       setError(false);
       setDateError (false);
   }

    return (
        <Fragment>
         {(loading) ? (
                <LoadingDark/>
            ) : ((serverError) ?
                  (<Error texto="Hubo un error al recuperar los datos" />)
                  : ((error) ? 
                    (<Error texto="ha ocurrido un error" />) : (
                    <CouponList 
                    copyList={copyList}
                    setSearch={setSearch} 
                    list={list}
                    handleModalOpen={handleModalOpen}
                    />)))}
            <AddCouponModal 
            modalOpen={modalOpen}
            handleModalOpen={handleModalOpen}
            agregarCupon={agregarCupon}
            dateError = {dateError} />
        </Fragment>
    )
}