import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  generatePetCards = (petData) => {
    if (!petData){

    }
    else { 
      let petCards = petData.map(pet => (<Pet 
        key={pet.id}
        pet = {pet}
        onAdoptPet = {this.props.onAdoptPet}/>
        ))
  
      return petCards}
  }
  
  
  render() {

    return <div className="ui cards">{this.generatePetCards(this.props.petData)} 
    </div>
  }
}

export default PetBrowser
