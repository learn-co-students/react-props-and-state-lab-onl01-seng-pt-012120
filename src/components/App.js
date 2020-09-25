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

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      } 
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'cat' || this.state.filters.type === 'dog' || this.state.filters.type === 'micropig') {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(data => this.setState({pets: data}))
        .catch(err => alert(err));
    } else {
      fetch('/api/pets')
        .then(resp => resp.json())
        .then(data => this.setState({pets: data}))
        .catch(err => alert(err));
    }
  }

  onAdoptPet = (petID) => {
    const foundPet = this.state.pets.find(pet => pet.id === petID);
    foundPet.isAdopted = true
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
