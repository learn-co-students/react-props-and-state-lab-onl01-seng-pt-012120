import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      onAdoptPet: props.onAdoptPet,
      pets: props.pets
    }
  }
  
  render() {
    debugger
    return (
    <div className="ui cards">
      {this.state.pets.forEach(pet=><Pet id={pet.id} type={pet.type} gender={pet.gender} age={pet.age} weight={pet.weight} name={pet.name} isAdopted={pet.isAdopted} onAdoptPet={this.onAdoptPet}/>)}
      {/* <Pet /> */}
    </div>
    )
  }
}

export default PetBrowser
