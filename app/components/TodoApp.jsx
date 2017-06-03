import React from 'react';
import uuid from 'uuid/v1';

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
        {id: uuid(), text: text, completed: false}
      ]
    })
  }

  handleToggle = (id) =>{
    var updateTodos = this.state.todos.map((todo) =>{
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos: updateTodos});
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
      <div className="controls">
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

module.exports = TodoApp;
