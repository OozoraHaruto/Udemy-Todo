//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Switch, Route} from 'react-router-dom' ;

//Components
//extra codes if needed
import TodoApp from 'TodoApp';
import Login from 'Login'

import {addTodos, startAddTodos} from 'actions';
// var store = require('configureStore').configure();
import {configure} from 'configureStore';
var store = configure();
import TodoAPI from 'TodoAPI';

store.dispatch(startAddTodos());

//load foundation
$(document).foundation();

//App CSS
require('applicationStyles'); //added line 56 - 90 in webpack.config that removes the need of adding loaders

//render
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/todos' component={TodoApp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
