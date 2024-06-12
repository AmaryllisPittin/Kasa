import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./scss/style.scss"
import "./scss/dimensions-and-spacing.scss"
import "./scss/merging.scss"
import "./scss/animations.scss"
<script src="https://kit.fontawesome.com/56bc717981.js" crossorigin="anonymous"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);