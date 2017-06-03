import React from 'react';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import uuid from 'uuid/v1';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos:[
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Leave mail on porch',
          completed: true
        },
        {
          id: uuid(),
          text: 'Play video games',
          completed: false
        }
      ]
    }
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
    var {todos} = this.state;

    return(
      <div className="controls">
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

module.exports = TodoApp;
