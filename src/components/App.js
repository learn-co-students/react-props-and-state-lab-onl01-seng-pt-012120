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

  onChangeType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
        }
    })
  }

  onFindPetsClick = () =>{


    if(this.state.filters.type === 'all'){
      let fetchURL = "/api/pets"
    
      fetch(fetchURL, {
        method: "GET",
            })
            .then(response => response.json())
            .then(petData=> {

              this.setState({
                  pets: petData 
              })


            })
            .catch(errors => {
                console.log(errors)
      })}
      else{
        let fetchURL = `/api/pets?type=${this.state.filters.type}`

            fetch(fetchURL, {
              method: "GET",
              })
              .then(response => response.json())
              .then(petData=> {
             
                this.setState({
                    pets: petData 
                })

          
              })
              .catch(errors => {
                  console.log(errors)
              })
              }
      }

  
  onAdoptPet = (id) =>{
    const pets = this.state.pets.map(p => {
      return p.id === id ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
    
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
              <Filters onChangeType = { event => this.onChangeType(event)} onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petData = {this.state.pets} onAdoptPet = {this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
