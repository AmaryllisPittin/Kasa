import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/style/main.css"
import "../src/style/aboutCollapses.css"
import "../src/style/error.css"
import "../src/style/logementPages.css"
<script src="https://kit.fontawesome.com/56bc717981.js" crossorigin="anonymous"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);