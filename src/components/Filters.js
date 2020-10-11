import React from 'react'

class Filters extends React.Component {

  handleFindPetsClick = () => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select 
              name="type" 
              id="type" 
              // listens for drop down event change tringgers function in App component
              onChange={this.props.onChangeType} 
          >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button 
              className="ui secondary button" 
              // listens for button click change triggers function in App component
              onClick ={this.handleFindPetsClick} 
          >
                  Find pets
          </button>
        </div>
      </div>
    )
  }
}

export default Filters
