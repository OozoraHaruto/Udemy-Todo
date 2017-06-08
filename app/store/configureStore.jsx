import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; //import redux from 'redux'; not working for ES6
import thunk from 'redux-thunk';
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';

export var configure = (initialState = {}) =>{
  var reducers = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer
  })

  // var store = createStore(reducers,initialState, compose(
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // ));

  const middleware = [thunk];

  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
  );
  const store = createStore(reducers, initialState, enhancer);

  return store;
}
