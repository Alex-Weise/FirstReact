import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, Tick} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App date={new Date()} />
    <Tick />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
  
// function tick() {
//   const element = (
//     <div className='title'>
//       <h1>The Clock!</h1>
//       <h2>Now {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
