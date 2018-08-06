import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'



class Search extends Component {
  state = {
    query: ''
  }

  matchListItems(query){
    if(query===''){
      this.props.updateState(this.props.constCoffe);
    }
  else if (query && query!==''){
  const match = new RegExp(escapeRegExp(query), 'i')
    console.log(match)

    let searchResults=this.props.constCoffe.filter(coffee=>match.test(coffee.location.address));
    this.props.updateState(searchResults);
  }}

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.matchListItems(query);
  };

  render() {
    return (
      <div className = "search-input"  >
      <h3> Filter</h3>
      <input type = "text" tabIndex='3'  aria-label='address search' role='textbox'
      placeholder = "Coffee Shop Address"
      value = {
        this.state.query
      }
      onChange = {
        (event) => this.updateQuery(event.target.value)
      }/>
      </div>
    )
  }
}

export default Search
