import React from 'react';
import {connect} from 'react-redux';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import {startLogout} from 'actions';
import {requireLogin} from 'app/router';

export class TodoApp extends React.Component{
  componentWillMount(){
    requireLogin();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.location !== this.props.location) {
      requireLogin();
    }
  }

  onLogout(e){
    e.preventDefault();
    var {dispatch} = this.props;

    dispatch(startLogout());
  }

  render(){
    return(
      <div className="">
        <div className="pageActions">
          <a onClick={this.onLogout.bind(this)}>Logout</a>
        </div>

        <h1 className="pageTitle">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(TodoApp)
