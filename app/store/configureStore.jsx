import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; //import redux from 'redux'; not working for ES6
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () =>{
  var reducers = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  })

  var store = createStore(reducers, compose(
    // applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  return store;
}
