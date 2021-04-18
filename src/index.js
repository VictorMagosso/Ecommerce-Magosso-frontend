import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/produtos' component={Products}/>
        <Route path='/carrinho' component={Cart}/>
        <Route path='/entrar-contato' component={Contact}/>
      </Switch>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);