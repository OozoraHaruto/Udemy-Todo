import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils';

import {AddTodo} from 'AddTodo';
import * as actions from 'actions'

describe('AddTodo', ()=>{
  it('should exist', () =>{
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () =>{
      var todoText = "Check Mail";
      var action = actions.startAddTodo(todoText);
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () =>{
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.todoText.value = "";
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
  });
});
