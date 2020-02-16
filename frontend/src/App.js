import React, {Fragment,useState,useEffect} from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import TopButton from './components/top-button/GoTopButton'
//Import layouts
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
//Import pages
import Contact from './components/pages/nav-items/Contact';
import RouteError from './components/pages/RouteError';
import ReviewDetail from './components/pages/ReviewDetail';
import HomePage from './components/pages/nav-items/HomePage';
//Pages customer
import CustomerAccount from './components/pages/customer/CustomerAccount';
import CustomerReviews from './components/pages/customer/CustomerReviews';
import CustomerOrders from './components/pages/customer/CustomerOrders';
import CustomerOrder from './components/pages/customer/CustomerOrder';
import Reservations from './components/pages/customer/CustomerReservations';
import WishList from './components/pages/customer/CustomerWishList';
import Registro from './components/pages/customer/CustomerRegister';
 import Chat from './components/pages/customer/chat/Customerchat';
//Pages shop
import Categorias from './components/pages/shop/ShopCategorias';
import ShopDetail from './components/pages/shop/ShopDetail';
import TopSellers from './components/pages/nav-items/TopSellers';
import ShopCheckout from './components/pages/shop/ShopCheckout';
import PurchResult from './components/pages/customer/purch_states/PurchResult';
import Admin from './components/admin/Admin';
import { getUnreadMessages } from './components/layouts/utils/topbarFunctions';

const App = ({location}) => {

  const [user_id,setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [search, setSearch] = useState('');
  const [isOferta, setIsOferta] = useState(false);
  const [role, setRole] = useState(false);
  const [msjs, setMsjs] = useState(0);

    useEffect (()=>{
      if (user_id !== null){
        localStorage.setItem ('user_id', user_id);
        localStorage.setItem('role', role);
      }else{
        let id = localStorage.getItem ('user_id');
        let role = localStorage.getItem('role');
        if (id !== "null"){
          setUser (parseInt(id));
          if (role !== 'false') {
            setRole(true);
          }else{
            setRole(false);
          }
        }
       
      }
    },[user_id]);

    const handleDrop = () => {
      setIsLogged(!isLogged);
      setUser (null);
      setRole(false);
      localStorage.setItem ('user_id', null);
      localStorage.setItem ('role', role);
    }

    const unreadMSG = () => {
      if (user_id !== null) {
          getUnreadMessages(user_id)
          .then(res => {
              setMsjs(res.unread_messages);
          })
          .catch(err => {
              return;
          })
      }
    }

    //vemos mensajes no leidos cada vez que cambiamos ruta
    useEffect (()=>{
        if (!role){
          if (location.pathname.includes('/customer-chat')){
            setMsjs (0);
          }else{
            unreadMSG();
          } 
        }      
    },[location])
    
    //Componente auxiliar para que el admin no pueda ir a "/"
    const Inicio = () => {
      if (isLogged && role) {
        return (
          <Admin handleDrop={handleDrop} user_id = {user_id} isLogged={isLogged} role={role}/>)
      }else{
        return (<HomePage user_id = {user_id} />)
      }
    }
  
    return (
      <div className="fragment" >   
          <Header msjs = {msjs} unreadMSG = {unreadMSG}  user_id = {user_id} setUser = {setUser} role={role} handleDrop={handleDrop} setRole={setRole} isLogged={isLogged} setIsLogged={setIsLogged} setSearch={setSearch} search={search} isOferta={isOferta} />
          <Switch>
            <Route exact path="/" render={Inicio} />
            <Route  path="/contact" render={Contact} />
            <Route
              path="/admin-page" 
              component={()=>(
                <Admin handleDrop={handleDrop} user_id = {user_id} isLogged={isLogged} 
                role={role}/>
            )}/>
            <Route  path="/shop-category" render={() => (
              <Categorias search={search} setIsOferta={setIsOferta} isOferta={false}/>
            )} />
            <Route  path='/shop-checkout' render={() =>(<ShopCheckout user_id = {user_id} />)} />
            <Route  path="/ofertas" render={() => (
              <Categorias search={search} setIsOferta={setIsOferta} isOferta={true}  />
            )} />
            <Route  path="/registro"
              render={()=>(
                <Registro
                  setUser = {setUser}
                />
              )}/>
            <Route  
            path="/success/:id"
            render={(props)=>(
              <PurchResult id = {props.match.params.id} type = {1} user_id = {parseInt(localStorage.getItem ('user_id'))}/>
            )}/>
            <Route  
            path="/pending/:id"
            render={(props)=>(
              <PurchResult id = {props.match.params.id} type = {2} user_id = {parseInt(localStorage.getItem ('user_id'))}/>
            )}/>
            <Route  
             path="/failure/:id"
            render={(props)=>(
              <PurchResult id = {props.match.params.id} type = {3} user_id = {parseInt(localStorage.getItem ('user_id'))}/>
            )}/>
            <Route path="/top-sellers" component={TopSellers}/>
            <Route  path="/shop-detail/:id" 
              render={(props)=>(
                <ShopDetail
                  props = {props}
                  user_id = {user_id}
                />
              )}/>
            {(isLogged && !role) ? (
              <Fragment>
                <Route  
              path="/customer-wishlist"
              component={()=>(
                <WishList handleDrop={handleDrop} user_id={user_id}/>
              )}/>
              <Route  
              path="/review-detail/:id" 
              component={(props)=>(
                <ReviewDetail
                props = {props}
                user_id = {user_id}
                handleDrop = {handleDrop}
              />)}/>
              <Route  
              path="/customer-order/:id"
              component={(props)=>(
                <CustomerOrder handleDrop={handleDrop} props = {props} user_id={user_id} />
              )}/>
              <Route  
              path="/customer-account"
              component={()=>(
                  <CustomerAccount
                    user_id = {user_id}
                    handleDrop={handleDrop}
                  />
              )}/>
              <Route  
              path="/customer-orders"
              component={()=>(
                <CustomerOrders handleDrop={handleDrop} user_id={user_id} />
              )}/>
              
              <Route  
              path="/customer-reservations"
              component={()=>(
                <Reservations handleDrop={handleDrop} user_id={user_id}/>
              )}/>
              <Route  
              path="/customer-reviewlist"
              component={()=>(
                <CustomerReviews handleDrop={handleDrop} user_id={user_id}/>
              )}/>
              <Route  
              path='/customer-chat'
              component={()=>(
                <Chat user_id={user_id} />
              )}/>
              </Fragment>
            ) : (<Redirect to="/" />)}

            <Route component={RouteError}/>
          </Switch>
          <Footer isLogged={isLogged} role={role}/>
          <TopButton /> 
      </div>
    )
  }

export default withRouter (App);