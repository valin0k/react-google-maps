import React, { Component } from 'react'
import { Consumer as MapConsumer } from '../../context/locations'
import GoogleMap from './GoogleMap'

class Map extends Component {

	render() {
		return (
			<div>
				<MapConsumer>
					{() => {
						return (
							<GoogleMap
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
