import React, { Component } from 'react'
import { Provider as LocationProvider } from '../context/locations'
import Map from './Map'
import Search from './Search'
import Locations from './Locations'

class App extends Component {
  state = {
    locations: [],
    isNewLocation: true
  }

  handleAddLocation = newLocation => {
    this.setState(({ locations }) => ({
      locations: locations.concat(newLocation),
      isNewLocation: true
    }))
  }

  handleRemoveLocation = removedLocation => e => {
    this.setState(({ locations }) => ({
      locations: locations.filter(
        location => location.lat !== removedLocation.lat && location.lng !== removedLocation.lng
      ),
      isNewLocation: false
    }))
  }

  handleChangeCoords = location => coords => {
    const updatedLocation = { ...location, lat: coords.latLng.lat(), lng: coords.latLng.lng() }

    this.setState(({ locations }) => ({
      locations: locations.map(item => (item === location ? updatedLocation : item)),
      isNewLocation: false
    }))
  }

  handleMoveLocation = (from, to) => {
    const { locations } = this.state
    const locationsCopy = locations.slice()
    const movedElement = locations[from]
    locationsCopy.splice(from, 1)
    locationsCopy.splice(to, 0, movedElement)

    this.setState(() => ({ locations: locationsCopy, isNewLocation: false }))
  }

  render() {
    const { locations } = this.state
    const providerData = {
      locations,
      handleAddLocation: this.handleAddLocation,
      handleRemoveLocation: this.handleRemoveLocation,
      handleChangeCoords: this.handleChangeCoords,
      handleMoveLocation: this.handleMoveLocation,
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
