import React from 'react';

class AddTodo extends React.Component{
  onSubmit = (e) =>{
    e.preventDefault();
    var todoText = this.todoText.value;

    if (todoText.length > 0){
      this.todoText.value = '';
      this.props.onAddTodo(todoText);
    }else{
      this.todoText.focus();
    }
  }

  render(){
    return(
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref={(ref) =>this.todoText = ref} placeholder="What do you need to do?"/>
          <button className="button hollow expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}

module.exports = AddTodo;
