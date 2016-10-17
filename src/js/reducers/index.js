import { createStore, combineReducers } from 'redux';
import header from './header';

const reducers = combineReducers({
  header
});

export default createStore(reducers);