//Modules
import React from 'react';
import {HashRouter as Router, Switch, Route, hashHistory} from 'react-router-dom' ;

//Components
//extra codes if needed
import TodoApp from 'TodoApp';
import Login from 'Login'

import firebase from 'app/firebase/';

export var requireLogin = () =>{
  if (!firebase.auth().currentUser){
    window.location.href = "/#/";
  }
}

export var requireNotLogin = () =>{
  if (firebase.auth().currentUser){
    window.location.href = "/#/todos";
  }
}

export default(
  <Router history={hashHistory}>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/todos' component={TodoApp} onEnter={requireLogin}/>
    </Switch>
  </Router>
)
