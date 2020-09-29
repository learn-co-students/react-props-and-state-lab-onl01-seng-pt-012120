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

  onChangeType=()=>{
    this.setState({
      ...this.state,
      filters:{
        type: this.state.type
      }
    })
  }

  addPets = (json) =>{
    console.log(json)
    this.setState({
      ...this.state,
      pets: json
    })
  }

  onFindPetsClick=(e)=>{
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then(resp=>resp.json()).then(json=>this.addPets(json))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(resp => resp.json()).then(json => this.addPets(json))
    }
  }

  onAdoptPet=(e)=>{
    /// what am I doing here??
    console.log(this.state.pets[e])

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
              < Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              onAdoptPet={this.onAdoptPet}
              pets={this.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
