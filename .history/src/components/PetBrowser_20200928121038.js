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
    debugger
  }
  render() {
    return (<div className="ui cards">
              {this.dispCards(this.pets)}
            </div>
    )
  }
}

export default PetBrowser
