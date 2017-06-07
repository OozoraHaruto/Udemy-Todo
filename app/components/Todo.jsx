import React from 'react';
import {connect} from 'react-redux'
import moment from 'moment';
import {startToggleTodo} from 'actions'

export class Todo extends React.Component{
  render(){
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate =() =>{
      var message = completed ? "Completed At: " : "Created At: "
      var timestamp = completed ? completedAt : createdAt;

      return `${message} ${moment.unix(timestamp).format("MMM Do YYYY @ h:mm a")}`
    }

    return(
      <div onClick={() => { dispatch(startToggleTodo(id, !completed)) }} className={todoClassName}>
        <div>
          <input type="checkbox" checked={completed} readOnly/> {//Added readonly to suppress warning coming from react console when debugging
          }
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
}

export default connect()(Todo);
