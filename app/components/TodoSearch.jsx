import React from 'react';

class TodoSearch extends React.Component{
  handleSearch = () =>{
    var showCompleted = this.checkbox.checked;
    var searchText = this.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render(){
    return(
      <div className="container__header">
        <div><input type="search" ref={(ref) => this.searchText = ref} placeholder="Search todos" onChange={this.handleSearch} /></div>
        <div>
          <label>
            <input type="checkbox" ref={(ref) => this.checkbox = ref} onChange={this.handleSearch} />
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
}

module.exports = TodoSearch;
