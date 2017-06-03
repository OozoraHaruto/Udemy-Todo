import $ from 'jquery';

module.exports ={
  setTodos(todos){
    if ($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    }catch (e){
      console.log(e + ", empty array will be used");
    }

    return ($.isArray(todos)) ? todos : [];
  },
  filterTodos(todos, showCompleted, searchText){
    var filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) =>{
      return !todo.completed || showCompleted;
    })

    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) =>{
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) >= 0;
    })

    //Sort Todos with non-completed first
    filteredTodos.sort((a, b)=>{
      if (!a.completed && b.completed){
        return -1;
      }else if(a.completed && !b.completed){
        return 1;
      }else{
        return 0
      }
    });

    return filteredTodos;
  }
}
