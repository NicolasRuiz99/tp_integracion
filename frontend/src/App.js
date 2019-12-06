import React from 'react';
import { Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
//Import layouts
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
//Import pages
import Contact from './components/pages/Contact';
import Categorias from './components/pages/Categorias';
import Historial from './components/pages/Historial';
import Ofertas from './components/pages/Ofertas';
import Registro from './components/pages/Registro';
import RouteError from './components/pages/RouteError';
import HomePage from './components/pages/HomePage';


const App = () => {
  
    return (
      <div>      
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/historial" component={Historial} />
            <Route  path="/categorias" component={Categorias} />
            <Route  path="/registro" component={Registro} />
            <Route  path="/ofertas" component={Ofertas} />
            <Route component={RouteError}/>
          </Switch>
          <Footer />
      </div>
    )
  }

export default App;