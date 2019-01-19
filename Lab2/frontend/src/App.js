import React, { Component } from 'react';
import logo from './logo.svg';
import Routes from './components/comcomponents/Routes'
import './css/App.css';
import {BrowserRouter} from 'react-router-dom';
import promise from "redux-promise";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers";
import setAuthorizationToken from '../src/utils/setAuthorizationToken'




const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStore(RootReducer, composePlugin(applyMiddleware(promise)));

setAuthorizationToken(localStorage.jwtToken);
class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <BrowserRouter>
          <Routes></Routes>
     </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
