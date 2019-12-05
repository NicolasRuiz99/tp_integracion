import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Error from './components/RouteError';

const App = () => {
  
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={Error}/>
        </Switch>
      </Router>
    )
  }

export default App;