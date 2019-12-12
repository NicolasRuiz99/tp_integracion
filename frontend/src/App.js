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
import ShopDetail from './components/pages/shop/ShopDetail';
import Cart from './components/pages/shop/ShopCart';
import Checkout1 from './components/pages/shop/ShopCheckout';
import Checkout2 from './components/pages/shop/ShopCheckout2';
import Checkout3 from './components/pages/shop/ShopCheckout3';
import Checkout4 from './components/pages/shop/ShopCheckout4';

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
            <Route  path="/shop-cart" component={Cart} />
            <Route  path="/shop-checkout1" component={Checkout1} />
            <Route  path="/shop-checkout2" component={Checkout2} />
            <Route  path="/shop-checkout3" component={Checkout3} />
            <Route  path="/shop-checkout4" component={Checkout4} />
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