import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  handleChangeType = (value) => {
    this.setState({
      filters: { type: value }
    })
  }
  handleFindPets = () => {
    let url;
    if (this.state.filters.type === "all") {
      url = "pets"
    } else {
      url = `pets?type=${this.state.filters.type}`
    }
    fetch(`/api/${url}`)
      .then(function (response) {
        return response.json();
      })
      .then(json => {
        this.setState({ pets: json })
      });
  }

  handleAdoptPet = (id) => {
    let pets = this.state.pets.map( pet => {
      if(pet.id === id){
        pet.isAdopted = true
      }
      return pet
    })
    this.setState({
      pets: pets
    })
  }


  render() {
    return (
      <div className="ui container" >
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.handleFindPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
