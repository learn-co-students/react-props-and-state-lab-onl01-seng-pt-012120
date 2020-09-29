import React from 'react' 

class Pet extends React.Component {

  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {props.name}
            {props.gender === 'female' ? '♀' : '♂'} {/ * '♀' OR '♂' * /}
          </a>
          <div className="meta">
            <span className="date">{props.type}</span>
          </div>
          <div className="description">
            <p>Age: {props.age}</p>
            <p>Weight: {props.weight}</p>
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
