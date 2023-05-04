import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Store from './Store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={Store}><App /></Provider>);//'store' -'s' should be small , it won't work otherwise. Its like value in provider.