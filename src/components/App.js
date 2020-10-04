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

  onChangeType = (n) => {
    this.setState({
      filters: {...this.state.filters, type: n}
    })
  }

  onFindPetsClick = () => {
    let t = this.state.filters.type
    if (t === 'all') {
      return fetch('/api/pets')
      .then(r => r.json())
      .then(json => this.setState({pets: json}))
    }
    else {
      return fetch(`/api/pets?type=${t}`)
      .then(r => r.json())
      .then(j => this.setState({pets: j}))
    }
  }

  adoptPet = (e) => {
    let x = this.state.pets
    let call;
    for (let i = 0; i < x.length; i++) {
      if (x[i].id === e) {call = i}
    }
    let newobj = Object.assign({}, x[call], {isAdopted: true});
    this.setState({
      pets: [
        ...this.state.pets.slice(0, call), newobj, ...this.state.pets.slice(call + 1)
      ]
    }, () => console.log(this.state.pets))
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
