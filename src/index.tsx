import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StoreProvider } from './store/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

ReactDOM.render(
<StoreProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</StoreProvider>, document.getElementById('root'));


