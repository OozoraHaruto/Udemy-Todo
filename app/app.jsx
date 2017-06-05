//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom' ;

//Compents
//extra codes if needed
import TodoApp from 'TodoApp';

import actions from 'actions';
var store = require('configureStore').configure();
// import store from 'configureStore';
// store.configure();


store.subscribe(() =>{
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.showCompleted());

//load foundation
$(document).foundation();

//App CSS
require('applicationStyles'); //added line 56 - 90 in webpack.config that removes the need of adding loaders

//render
ReactDOM.render(
    <TodoApp />,
  document.getElementById('app')
);
