import React, { Component } from 'react'
import { Provider as LocationProvider } from '../context/locations'
import Map from './Map'

class App extends Component {
  state = {
    locations: [],
  }

  render() {
    const { locations } = this.state
    const providerData = {
      locations
    }
    return (
      <LocationProvider value={providerData}>
        <Map />
      </LocationProvider>
    )
  }
}

export default App
