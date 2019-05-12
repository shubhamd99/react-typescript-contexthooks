import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import { StoreProvider } from './store/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

ReactDOM.render(
<StoreProvider>
    <Router>
        <App />
    </Router>
</StoreProvider>, document.getElementById('root'));


