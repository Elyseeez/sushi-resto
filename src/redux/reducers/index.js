import { combineReducers } from 'redux';


import sushi from './sushi';
import cart from './cart';

const rootReducer = combineReducers({
 
  sushi,
  cart,
});

export default rootReducer;