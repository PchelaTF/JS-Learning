import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = <h2>Hello World!!!</h2>;
// const elem = React.createElement('h2', { className: 'gretting' }, 'Hello World!!!');

// const text = "Hello World!";
// const elem2 = (
//   <div>
//     <h1 className='text'>Text: {text}</h1>
//     <h2>Math: {2 + 2}</h2>
//     <h2>Arr: {['1', 'f']}</h2>
//     <input type="text" />
//     <label htmlFor=''></label>
//     <button tabIndex={0}>Click</button>
//     <button />
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // elem2,
  <StrictMode>
    <App />
  </StrictMode>
);