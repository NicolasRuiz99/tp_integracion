import React, { useState, useEffect, Fragment } from 'react'
import ReviewList from './../list/review/ReviewList';
import Error from './../../messages/Error';
import Spinner from 'react-bootstrap/Spinner';
import {getReviews} from './../utils/adminFunctions';

export default function Reviews() {
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [copyList, setCopyList] = useState([]);
    const [search, setSearch] = useState('');
    const [loading,setLoading] = useState (false);

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
    }, []);
 
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
            ) : ((error) ? 
                <Error texto="ha ocurrido un error" /> : <ReviewList setSearch={setSearch} copyList={copyList} />)}
        </Fragment>
    )
}

