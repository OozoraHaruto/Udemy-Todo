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
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Leave mail on porch'
        },
        {
          id: uuid(),
          text: 'Play video games'
        }
      ]
    }
  }

  handleAddTodo = (text) =>{
    this.setState({
      todos:[
        ...this.state.todos,
        {id: uuid(), text: text}
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
    var {todos} = this.state;

    return(
      <div className="controls">
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

module.exports = TodoApp;
