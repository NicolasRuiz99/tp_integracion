import React, { useState, useEffect, Fragment } from 'react'
import ReviewList from './../list/review/ReviewList';
import Error from './../../messages/Error';
import Spinner from 'react-bootstrap/Spinner';
import {getReviews} from './../utils/adminFunctions';
import { deleteReview } from '../../pages/customer/utils/CustomerFunctions';
import DeleteReviewModal from '../../modals/DeleteReviewModal';

export default function Reviews() {
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [copyList, setCopyList] = useState([]);
    const [search, setSearch] = useState('');
    const [loading,setLoading] = useState (false);
    const [modalOpen, setModalOpen] = useState(false);
    const [serverError,setServerError] = useState(false);
    const [refresh,setRefresh] = useState (false);
    const [toDelete, setToDelete] = useState([]);
    const [clean, setClean] = useState(false);

    const handleModalOpen = () => {
      setModalOpen(!modalOpen);
      setError(false);  
     };

    const limpiarChecks = (e) => {
      setToDelete([]);
      setClean(true);
    }

    const eliminarReview = () => {
     for (let index = 0; index < toDelete.length; index++) {
      let id = toDelete[index];
      deleteReview(id)
      .then(res => {
          setRefresh(true);
      })
      .catch (err => {
        setServerError(true);
      }); 
     }  
     setServerError(false);
     setToDelete([]);
    }

    const changeList = (id, checked) => {
        if (!checked) {
            setClean(false); 
            setToDelete([...toDelete, id]);
            console.log(toDelete)
        }
         else {
            setClean(false); 
             let lista = toDelete.filter(item => item !== id)
             setToDelete(lista);
             console.log(toDelete)
         }
         
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        getReviews()
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
              setCopyList(list.filter(review => {
                return (review.name.toLowerCase().includes(search.toLowerCase()));
              }));
        }else{
         setCopyList(list);
          }     
     },[search]);

    return (
        <Fragment>
        {(loading) ? (
                <div className="col-md-12 text-center" style={{top:'50%',left:'5%', position: 'fixed'}}> 
                    <Spinner animation="border" variant="dark" size="lg" role="status" />
                </div> 
            ) : ((serverError) ?
                  (<div className="alert alert-danger mt-2 mb-5 text-center">
                    Hubo un error al recuperar los datos
                  </div>)
                  : ((error) ? 
                    (<Error texto="ha ocurrido un error" />) : (
                    <ReviewList 
                    setSearch={setSearch} 
                    copyList={copyList} 
                    isCheck={limpiarChecks} 
                    changeList={changeList} 
                    toDelete={toDelete} 
                    clean={clean}
                    handleModalOpen={handleModalOpen}
                    />)))}
        <DeleteReviewModal
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        eliminarReview={eliminarReview}
        />
        </Fragment>
    )
}

