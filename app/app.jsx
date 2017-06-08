//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {addTodos, startAddTodos, login, logout} from 'actions';
// var store = require('configureStore').configure();
import {configure} from 'configureStore';
var store = configure();
import firebase from 'app/firebase/';
import router from 'app/router/'

firebase.auth().onAuthStateChanged((user) =>{
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startAddTodos());
    window.location.href = "/#/todos";
  }else{
    store.dispatch(logout())
    window.location.href = "/#/";
  }
})

//load foundation
$(document).foundation();

//App CSS
require('applicationStyles'); //added line 56 - 90 in webpack.config that removes the need of adding loaders

//render
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
