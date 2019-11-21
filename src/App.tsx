import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './store'
import { Finder } from './finder';
import './App.scss';

const skipLog = ['test', 'production'].includes(process.env.NODE_ENV);
const store = skipLog ?
  createStore(rootReducer, applyMiddleware(thunkMiddleware)) :
  createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Finder></Finder>
      </div>
    </Provider>
  );
}

export default App;
