import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Header} from "./App";

// const elem = <h2>Hello!</h2>
// const elem = React.createElement('h2', {className: 'qwerty'}, 'Hello')


// const text = 'Hello!!'

// const elem = (
//     <div>
//         <h2 className="text">Text: {text}</h2>
//         <input type="text" />
//         <label htmlFor=""></label>
//         <button tabIndex="0">Click</button>
//     </div>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // elem
  <StrictMode>
    <App />
  </StrictMode>
);