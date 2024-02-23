import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/style/style.css"
import "../src/style/dimensions-and-spacing.css"
import "../src/style/merging.css"
import "../src/style/animations.css"
<script src="https://kit.fontawesome.com/56bc717981.js" crossorigin="anonymous"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);