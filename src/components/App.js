import React, { Component } from 'react'
import { Provider as LocationProvider } from '../context/locations'
import Map from './Map'
import Search from './Search'
import Locations from './Locations'

class App extends Component {
  state = {
    locations: [],
  }

  handleAddLocation = newLocation => {
    this.setState(({ locations }) => ({
      locations: locations.concat(newLocation),
      isNewLocation: true
    }))
  }

  render() {
    const { locations } = this.state
    const providerData = {
      locations,
      handleAddLocation: this.handleAddLocation,
    }
    return (
      <LocationProvider value={providerData}>
        <Search />
        <Map />
        <Locations />
      </LocationProvider>
    )
  }
}

export default App
