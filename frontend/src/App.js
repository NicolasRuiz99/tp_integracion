import React, {Fragment} from 'react';
import { Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
//Import layouts
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
//Import pages
import Contact from './components/pages/Contact';
import Categorias from './components/pages/Categorias';
import Historial from './components/pages/Historial';
import Ofertas from './components/pages/Ofertas';
import RouteError from './components/pages/RouteError';
import HomePage from './components/pages/HomePage';
//Pages customer
import CustomerAccount from './components/pages/customer/CustomerAccount';
import CustomerOrders from './components/pages/customer/CustomerOrders';
import WishList from './components/pages/customer/CustomerWishList';
import Registro from './components/pages/customer/CustomerRegister';


const App = () => {
  
    return (
      <Fragment >      
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/historial" component={Historial} />
            <Route  path="/categorias" component={Categorias} />
            <Route  path="/registro" component={Registro} />
            <Route  path="/ofertas" component={Ofertas} />
            <Route  path="/customer-account" component={CustomerAccount} />
            <Route  path="/customer-orders" component={CustomerOrders} />
            <Route  path="/customer-wishlist" component={WishList} />
            <Route component={RouteError}/>
          </Switch>
          <Footer />
      </Fragment>
    )
  }

export default App;