import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

// Configuração para Reactotron
import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={5000} />
      </BrowserRouter>
    </Provider>



  );
}

export default App;
