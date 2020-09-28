import React from 'react' 

class Pet extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: props.name,
      type: props.type,
      age: props.age,
      weight: props.weight,
      adopted: false
    }
  }
  render() {
    debugger
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.state.name}
          </a>
          <div className="meta">
            <span className="date">{this.state.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.state.age}</p>
            <p>Weight: {this.state.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
