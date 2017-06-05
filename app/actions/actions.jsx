export const ADD_TODO = 'ADD_TODO';
export const setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	}
}

export const toggleShowCompleted = () =>{
  return{
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

// export const addTodo = (text) =>{
//   return{
//     type: 'ADD_TODO',
//     text
//   }
// }

export function addTodo (text){
  return{
    type: ADD_TODO,
    text
  }
}

export const toggleTodo = (id) =>{
  return{
    type: 'TOGGLE_TODO',
    id
  }
}
