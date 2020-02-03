import React, {Fragment,useState,useEffect} from 'react';
import { Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import TopButton from './components/top-button/GoTopButton'
//Import layouts
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
//Import pages
import Contact from './components/pages/nav-items/Contact';
import TopVentas from './components/pages/nav-items/TopVentas';
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

const App = () => {

  const [user_id,setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [search, setSearch] = useState('');
  const [isOferta, setIsOferta] = useState(false);
  const [role, setRole] = useState(false);

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
    },[user_id])

    const handleDrop = () => {
      setIsLogged(!isLogged);
      setUser (null);
      setRole(false);
      localStorage.setItem ('user_id', null);
      localStorage.setItem ('role', role);
    }
    
  
    return (
      <div className="fragment" >      
          <Header user_id = {user_id} setUser = {setUser} role={role} handleDrop={handleDrop} setRole={setRole} isLogged={isLogged} setIsLogged={setIsLogged} setSearch={setSearch} search={search} isOferta={isOferta} />
          <Switch>
            <Route exact path="/" render={()=><HomePage user_id = {user_id} />} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/top-ten" component={TopVentas} />
            <Route  path="/admin-page" render={() => (
              <Admin handleDrop={handleDrop} />
            )} />
            <Route  path="/shop-category" render={() => (
              <Categorias search={search} setIsOferta={setIsOferta} isOferta={false}/>
            )} />
            <Route path="/top-sellers" component={TopSellers}/>
            <Route  path="/shop-detail/:id" 
              render={(props)=>(
                <ShopDetail
                  props = {props}
                  user_id = {user_id}
                />
              )}/>
            <Route  path="/review-detail/:id" 
              render={(props)=>(
              <ReviewDetail
                props = {props}
                user_id = {user_id}
                handleDrop = {handleDrop}
            />
            )}/>
            <Route  path='/shop-checkout' render={() =>(<ShopCheckout user_id = {user_id}/>)} />
            <Route  path="/registro"
              render={()=>(
                <Registro
                  setUser = {setUser}
                />
              )}/>
            <Route  path="/ofertas" render={() => (
              <Categorias search={search} setIsOferta={setIsOferta} isOferta={true}  />
            )} />
            <Route  path="/customer-account" 
            render={()=>(
                <CustomerAccount
                  user_id = {user_id}
                  handleDrop={handleDrop}
                />
            )}/>
            <Route  path="/customer-orders" render={() =>(<CustomerOrders handleDrop={handleDrop} user_id={user_id} />)} />
            <Route  path="/customer-order/:id" render={(props) =>(<CustomerOrder handleDrop={handleDrop} props = {props} user_id={user_id} />)} />
            <Route  path="/success/:id" render={(props) =>(<PurchResult props = {props} type = {1}/>)} />
            <Route  path="/pending/:id" render={(props) =>(<PurchResult props = {props} type = {2}/>)} />
            <Route  path="/failure/:id" render={(props) =>(<PurchResult props = {props} type = {3}/>)} />
            <Route  path="/customer-wishlist" render={() =>(<WishList handleDrop={handleDrop} user_id={user_id}/>)} />
            <Route  path="/customer-reservations" render={() =>(<Reservations handleDrop={handleDrop} user_id={user_id}/>)} />
            <Route path="/customer-reviewlist" render={() =>(<CustomerReviews handleDrop={handleDrop} user_id={user_id}/>)} />
            <Route  path='/customer-chat' render={() =>(<Chat user_name={'cliente'} />)} />
            <Route component={RouteError}/>
          </Switch>
          <Footer isLogged={isLogged} />
          <TopButton />
      </div>
    )
  }

export default App;