import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp valor={ 5 }/>
  </React.StrictMode>,
);
