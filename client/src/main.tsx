import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routerConfig } from './routerConfig';
import { Provider } from 'react-redux';
import { store as setupStore } from './store/store';
import './global.css';

const router = createBrowserRouter(routerConfig);
const store = setupStore;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
