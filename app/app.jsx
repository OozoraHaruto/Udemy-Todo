//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom' ;

//Components
//extra codes if needed
import TodoApp from 'TodoApp';

import {addTodos} from 'actions';
// var store = require('configureStore').configure();
import {configure} from 'configureStore';
var store = configure();
import TodoAPI from 'TodoAPI';

//For redux
store.subscribe(() =>{
  var state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos)
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));

//load foundation
$(document).foundation();

//App CSS
require('applicationStyles'); //added line 56 - 90 in webpack.config that removes the need of adding loaders

//render
ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
  document.getElementById('app')
);
