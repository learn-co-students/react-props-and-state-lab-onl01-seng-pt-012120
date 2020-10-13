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

  updateFilters = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  updatePets = (petsArr) => {
    this.setState({
      pets: petsArr
    })
  }

  onFindPetsClick = (event) => {
    let params = ''

    params = this.state.filters.type === 'all' ? params : "?type=" + this.state.filters.type

    fetch(`/api/pets${params}`)
      .then(res => res.json())
      .then(json => this.updatePets(json))
  }

  onAdoptPet = id => {
    let petIndex = this.state.pets.findIndex(pet => pet.id === id)
    let pets = [...this.state.pets]

    pets[petIndex] = {
      ...pets[petIndex], 
      isAdopted: true
    }

    this.setState({
      pets: pets
    })
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
              <Filters 
                onChangeType={this.updateFilters} 
                type={this.state.filters.type} 
                updatePets={this.updatePets}  
                onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
