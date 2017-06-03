import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils';

import TodoSearch from 'TodoSearch';

describe('TodoSearch', ()=>{
  it('should exist', () =>{
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', ()=>{
    var searchText = "Dog";
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper check value', ()=>{
    var showCompleted = true;
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.checkbox.checked = showCompleted;
    TestUtils.Simulate.change(todoSearch.checkbox);

    expect(spy).toHaveBeenCalledWith(showCompleted, "");
  })
});
