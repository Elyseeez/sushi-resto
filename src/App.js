import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Menu from './components/menu';
import Cart from './components/cart';
import './scss/app.scss';

function App() {
  

  return (
    <Router>
    <div className="wrapper">
       <Header/>
       <Route path="/Home" component={Home} exact/>
       <Route path="/menu" component={Menu} exact/>
       <Route path="/cart" component={Cart} exact/>
     
    </div>
    </Router>
  );
}

export default App;
