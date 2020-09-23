import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div>
        {this.props.pets.map( (pet, i) => <div className="ui cards" key={pet.id}><Pet pet={pet} onAdoptPet={ this.props.onAdoptPet}/></div> )}
      </div>
    )
  }

}

export default PetBrowser
