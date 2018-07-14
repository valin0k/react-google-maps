import React, { Component } from 'react'
import { Provider as LocationProvider } from '../context/locations'

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
        <div>Hello world</div>
      </LocationProvider>
    )
  }
}

export default App
