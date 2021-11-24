import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Menu from './components/menu';
import axios from 'axios';
import {useSelector, useDispatch,} from 'react-redux';
import {setSushi} from './redux/actions/sushi';
import './scss/app.scss';

function App() {
  const dispatch = useDispatch();
  const {items} = useSelector(({sushi}) => {
    return {
     items: sushi.items,
  };
  });
 

  React.useEffect (() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      dispatch(setSushi(data.sushi));
      console.log('pisss');
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
    <div className="wrapper">
       <Header/>
       <Route path="/Home" component={Home}/>
       <Route path="/menu" render={() => <Menu items={items}/>}/>
     
    </div>
    </Router>
  );
}

export default App;
