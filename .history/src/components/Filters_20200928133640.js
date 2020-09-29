import React from 'react' 

class Filters extends React.Component {

  constructor(props){
    super(props)
    this.state={
      onChangeType: props.onChangeType,
      onFindPetsClick: props.onFindPetsClick
    }
  }

  onChange=(e)=>{
    this.setState({
      ...this.state,
      filter:{
        type: e.target.value
      }
    })
  }
  
  render() {

    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.onChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onFindPetsClick={this.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
