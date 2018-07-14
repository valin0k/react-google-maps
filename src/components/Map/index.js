import React, { Component } from 'react'
import { Consumer as MapConsumer } from '../../context/locations'
import GoogleMap from './GoogleMap'

class Map extends Component {
  state = { openItem: null }

  handleOpenItem = item => e => {
    this.setState({ openItem: this.state.openItem === item ? null : item })
  }

	render() {
    const { openItem } = this.state
		return (
      <div>
        <MapConsumer>
          {({ locations, handleChangeCoords }) => {
            return (
              <GoogleMap
                openItem={openItem}
                locationItems={locations}
                handleChangeCoords={handleChangeCoords}
                handleOpenItem={this.handleOpenItem}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            )
          }}
        </MapConsumer>
      </div>
		)
	}
}

export default Map
