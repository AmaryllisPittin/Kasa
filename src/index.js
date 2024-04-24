import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./sass/style.scss"
import "./sass/dimensions-and-spacing.scss"
import "./sass/merging.scss"
import "./sass/animations.scss"
<script src="https://kit.fontawesome.com/56bc717981.js" crossorigin="anonymous"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);