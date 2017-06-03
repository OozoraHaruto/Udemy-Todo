import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', ()=>{
  it('should exist', () =>{
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', ()=>{
    var todoText = "test text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', ()=>{
    var todoData = {id: 11, text: 'Test Feature', completed: false, createdAt: 0, completedAt: undefined}
    var expectedCompleted = !todoData.completed; // declared this here as when handleToggle is called todoData object will also be changed
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(todoData.completed);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(expectedCompleted);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  })

  it('should toggle completed value when handleToggle called', ()=>{
    var todoData = {id: 11, text: 'Test Feature', completed: true, createdAt: 0, completedAt: 0}
    var expectedCompleted = !todoData.completed; // declared this here as when handleToggle is called todoData object will also be changed
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});


    expect(todoApp.state.todos[0].completed).toBe(todoData.completed);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(expectedCompleted);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  })
});
