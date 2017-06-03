import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', ()=>{
  it('should exist', () =>{
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo prop with valid data', () =>{
      var todoText = "Check Mail";
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo prop with invalid input', () =>{
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.todoText.value = "";
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
  });
});
