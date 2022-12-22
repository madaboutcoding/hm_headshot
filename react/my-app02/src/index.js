import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import reportWebVitals from './reportWebVitals';
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App1 />
    <App />
    <App2 />
    <App3 />
    
  </React.StrictMode>
);
// const element=<h1>Welcome</h1>;
// root.render(element)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
