import React from 'react';
import uuid from 'uuid/v1';
import moment from 'moment';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos:TodoAPI.getTodos()
    }
  }

  componentDidUpdate(){
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo = (text) =>{
    this.setState({
      todos:[
        ...this.state.todos,
        {id: uuid(), text: text, completed: false, createdAt: moment().unix(), completedAt: undefined}
      ]
    })
  }

  handleSearch = (showCompleted, searchText) =>{
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render(){
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return(
      <div className="">
        <h1 className="pageTitle">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TodoApp;
