import React from 'react';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);