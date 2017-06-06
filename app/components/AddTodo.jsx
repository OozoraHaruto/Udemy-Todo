import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from 'actions';

export class AddTodo extends React.Component{
  onSubmit = (e) =>{
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.todoText.value;

    if (todoText.length > 0){
      this.todoText.value = '';
      dispatch(addTodo(todoText))
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

export default connect()(AddTodo);
