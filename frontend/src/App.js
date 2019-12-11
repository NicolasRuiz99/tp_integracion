import React, {Fragment} from 'react';
import { Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
//Import layouts
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
//Import pages
import Contact from './components/pages/Contact';
import Historial from './components/pages/Historial';
import Ofertas from './components/pages/Ofertas';
import RouteError from './components/pages/RouteError';
import HomePage from './components/pages/HomePage';
//Pages customer
import CustomerAccount from './components/pages/customer/CustomerAccount';
import CustomerOrders from './components/pages/customer/CustomerOrders';
import CustomerOrder from './components/pages/customer/CustomerOrder'
import WishList from './components/pages/customer/CustomerWishList';
import Registro from './components/pages/customer/CustomerRegister';
//Pages shop
import Categorias from './components/pages/shop/ShopCategorias';
import ShopDetail from './components/pages/shop/ShopDetail'

const App = () => {
  
    return (
      <Fragment >      
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/historial" component={Historial} />
            <Route  path="/shop-category" component={Categorias} />
            <Route  path="/shop-detail" component={ShopDetail} />
            <Route  path="/registro" component={Registro} />
            <Route  path="/ofertas" component={Ofertas} />
            <Route  path="/customer-account" component={CustomerAccount} />
            <Route  path="/customer-orders" component={CustomerOrders} />
            <Route  path="/customer-order" component={CustomerOrder} />
            <Route  path="/customer-wishlist" component={WishList} />
            <Route component={RouteError}/>
          </Switch>
          <Footer />
      </Fragment>
    )
  }

export default App;