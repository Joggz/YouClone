import React, { Component } from 'react'

import './search.scss';

 class Search extends Component {
    state = {
      searchterm: ''
    }

    handleChange = (e) => {
      this.setState({
        searchterm: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { searchterm } = this.state;
      const { onFormSubmit } = this.props;

      onFormSubmit(searchterm)

    }
  
  render() {
    return (
      <div className='search'>
        <form onSubmit={this.handleSubmit}>
         <input type='text'className='searchInput' placeholder='search...' 
         onChange={this.handleChange} />
         <button className='searchbtn'>Search</button>
        
        </form>
      </div>
    )
  }
}

export default Search;