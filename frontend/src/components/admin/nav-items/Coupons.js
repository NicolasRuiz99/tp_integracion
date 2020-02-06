import React, { useState, useEffect, Fragment } from 'react'
import CouponList from './../list/coupon/CouponList';
import Error from './../../messages/Error';
import Spinner from 'react-bootstrap/Spinner';
import {getCoupons, deleteCoupon, addCoupon} from './../utils/adminFunctions';
import {AddCouponModal} from './../utils/modals';
import moment from 'moment';

export default function Coupons() {
    const [list, setList] = useState([]);
    const [copyList, setCopyList] = useState([]);
    const [error, setError] = useState(false);
    const [loading,setLoading] = useState (false);
    const [modalOpen, setModalOpen] = useState(false);
    const [serverError,setServerError] = useState(false);
    const [refresh,setRefresh] = useState (false);
    const [search, setSearch] = useState('');

    const handleModalOpen = () => {
      setModalOpen(!modalOpen);
      setError(false);  
     };

    useEffect(() => {
        window.scrollTo(0, 0);
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
       let cad_date = moment(date).format('DD/MM/YYYY');
       addCoupon({pc, cad_date})
       .then(res => {
           setRefresh(true);
       })
       .catch(err => {
        setError(true);   
        return;
       });
       setError(false);
   }

    return (
        <Fragment>
         {(loading) ? (
                <div className="col-md-12 text-center" style={{top:'50%',left:'5%', position: 'absolute'}}> 
                    <Spinner animation="border" variant="dark" size="lg" role="status" />
                </div> 
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
            agregarCupon={agregarCupon} />
        </Fragment>
    )
}