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
    console.log(this.state)
    return (<div className="ui cards">
              <Pet />
            </div>
    )
  }
}

export default PetBrowser
