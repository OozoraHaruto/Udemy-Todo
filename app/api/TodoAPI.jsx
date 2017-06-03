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
  }
}
