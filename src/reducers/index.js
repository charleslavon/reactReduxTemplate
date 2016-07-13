import { combineReducers } from 'redux';
import wodReducer from './wodReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  /*
  * the keys of the objects here correspond to the fields of the state object
  *  that the rootReducer will manage
  */
  wods: wodReducer,
  routing: routerReducer
});


export default rootReducer;
