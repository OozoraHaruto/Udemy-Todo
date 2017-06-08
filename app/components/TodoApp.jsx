import React from 'react';
import {connect} from 'react-redux';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import {startLogout} from 'actions';

export class TodoApp extends React.Component{
  onLogout = (e) =>{
    e.preventDefault();
    var {dispatch} = this.props;

    dispatch(startLogout());
  }

  render(){
    return(
      <div className="">
        <div className="pageActions">
          <a onClick={this.onLogout}>Logout</a>
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
