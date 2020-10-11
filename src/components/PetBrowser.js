import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  genPets = pets => {
    return pets.map((pet) => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} /> )
  }

  render() {
    return <div className="ui cards">{this.genPets(this.props.pets)}</div>
  }
}

export default PetBrowser
