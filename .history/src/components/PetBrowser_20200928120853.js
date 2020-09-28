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

  dispCards=(cards)=>{
    const pets = cards.map(pet=><Pet name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} adapted={pet.adopted}/>)
  }
  render() {
    return (<div className="ui cards">
              {this.dispCards(this.pets)}
            </div>
    )
  }
}

export default PetBrowser
