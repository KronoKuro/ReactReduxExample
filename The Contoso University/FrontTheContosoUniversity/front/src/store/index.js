import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducers';
const initialState = {};

export const store = createStore(
  rootReducer,
  //initialState,
   applyMiddleware(thunk)
 );

 