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

  onChangeType=(type)=>{
    this.setState({
      ...this.state,
      filters:{
        type: type
      }
    })
  }

  onFindPetsClick=(e)=>{
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
    }
  }

  onAdoptPet=()=>{
    /// what am I doing here??
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
                onFindPetsClick={this.onFindPetsClick}
                onAdoptPet={this.onAdoptPet} / >
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
