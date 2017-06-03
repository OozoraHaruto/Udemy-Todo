import React from 'react';

class Todo extends React.Component{
  render(){
    var {id, text, completed} = this.props;

    return(
      <div onClick={() => { this.props.onToggle(id); }}>
        <input type="checkbox" checked={completed} readOnly/> {//Added readonly to suppress warning coming from react console when debugging
        }
        {text}
      </div>
    )
  }
}

module.exports = Todo;
