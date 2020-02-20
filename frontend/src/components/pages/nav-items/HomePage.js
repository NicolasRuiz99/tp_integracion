import React, { Fragment,useEffect,useState } from 'react';
import Slider from '../../Slider';
import './../../../css/default.css';
import { listHighRatedProducts, listNewProducts } from '../shop/utils/shopFunctions';
import ProductList from '../../lists/ProductList';
import Error from '../../messages/Error';
import Loading from '../../messages/Loading';
import Info from '../../messages/Info';

const HomePage = ({user_id}) => {

    const [list1,setList1] = useState ([]);
    const [list2,setList2] = useState ([]);
    const [error,setError] = useState (false);
    const [loading,setLoading] = useState (false);

    useEffect (()=>{
        window.scrollTo(0, 0);
        setLoading (true);
        listNewProducts ()
        .then (res=>{
            setList1 (res);
        })
        .catch (err=>{
            setError (true);
            return;
        })
        listHighRatedProducts ()
        .then (res=>{
            setList2 (res);
            setLoading (false);
        })
        .catch (err=>{
            setError (true);
            return;
        })
        setError (false);
    },[user_id])

    return (
        <Fragment>
        <Slider />
        {(loading)?
            <Loading/>
        :
        <div className="box row bar">
            <div className="col-sm-6">
            <div className="heading text-center">
            <h2>Novedades</h2>
            </div>
            {(error)?
            <Error texto={'Hubo un error al recuperar los datos'}/>
            :
            <div>
            {(list1.length === 0)?
            <Info texto = "Listado no disponible"/>
            :
            <ProductList list={list1}/>
            }
            </div>
            }
            </div>
        <div className="col-sm-6" style={{borderLeft: '1px solid #cccccc'}}>
        <div className="heading text-center">
            <h2>Mejor valorados</h2>
        </div>
            {(error)?
            <Error texto={'Hubo un error al recuperar los datos'}/>
            :
            <div>
            {(list2.length === 0)?
            <Info texto = "Listado no disponible"/>
            :
            <ProductList list={list2}/>
            }
            </div>
            }
            </div>
        </div>
        }
        </Fragment>    
    );   
}
export default HomePage;
