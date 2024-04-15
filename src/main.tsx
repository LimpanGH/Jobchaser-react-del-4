import React from 'react';
import { createRoot, ReactDOM } from 'react-dom/client';
import { App } from './App';
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Sandras:
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import {App} from './App'
// import './index.css'
// import {AuthProvider} from "./context/AuthContext"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </React.StrictMode>,
// )
