import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import './css/buttons.css';
import './css/heading.css';
import './css/badge.css';
import './css/footer.css';
import './css/topbar.css';
import './css/navbar.css';
import './css/product.css';
import './css/page.css';
import './css/box.css';
import './css/dropdown.css';
import './css/table.css';
import './css/card.css';
import './css/text.css';
import './css/panel.css';
import './css/div.css';
import './css/social.css';

ReactDOM.render(
  
    <Router>
    <App />
    </Router>

, document.getElementById('root'));

serviceWorker.unregister();
