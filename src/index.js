import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from 'scenes/Home';

const App = () => (
  <Home />
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
