import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  petHandler = () => (
    this.props.pets.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
    })
  )
  render() {
  return <div className="ui cards">{this.petHandler()}</div>
  }
}

export default PetBrowser
