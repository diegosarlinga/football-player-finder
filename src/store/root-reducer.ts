import { finderReducer } from '../finder'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  finder: finderReducer,
});
