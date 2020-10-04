import React from 'react'

class Pet extends React.Component {

  render() {
    const pet = this.props.pet;
    let call = () => this.props.onAdoptPet(pet.id)
    let button;
    let gender;
    if (pet.isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>
    }
    else {
      button = <button onClick={call} className="ui primary button">Adopt pet</button>
    }
    if (pet.gender === 'male') {gender = '♂'} else {gender = '♀'}

    return (
      <div className="card">
        <div className="content">
          <p className="header">
            {gender}
            {pet.name}
          </p>
          <div className="meta">
          <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    )
  }
}

export default Pet
