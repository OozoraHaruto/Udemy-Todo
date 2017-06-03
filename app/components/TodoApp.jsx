import React from 'react';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos:[
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Leave mail on porch'
        },
        {
          id: 4,
          text: 'Play video games'
        }
      ]
    }
  }

  handleAddTodo = (text) =>{
    alert('New Todo: ' + text)
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
