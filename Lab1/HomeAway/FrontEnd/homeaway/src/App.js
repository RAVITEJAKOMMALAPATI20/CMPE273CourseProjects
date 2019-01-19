import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
function reducer() {
    let appobj={
        bedrooms:"3"
    };
    return appobj;
}
const store=createStore(reducer)
class App extends Component {
  render() {
    return (
        <Provider store ={store}>
        <BrowserRouter>
        <Main/>
        </BrowserRouter>
        </Provider>
    );
  }
}
export default App;
