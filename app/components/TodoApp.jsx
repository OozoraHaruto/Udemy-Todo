import React from 'react';
import uuid from 'uuid/v1';
import moment from 'moment';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component{
  render(){
    return(
      <div className="">
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

module.exports = TodoApp;
