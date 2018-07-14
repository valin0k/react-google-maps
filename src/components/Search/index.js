import React, { Component } from 'react'
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox'
import { Consumer as MapConsumer } from '../../context/locations'

import './style.css'

class Search extends Component {
	handlePickPlace = handler => () => {
		const places = this.searchBox.getPlaces().slice(-1)
		const { geometry, name } = places[0]
		handler({
			lat: geometry.location.lat(),
			lng: geometry.location.lng(),
			name
		})
	}

	onSearchBoxMounted = ref => (this.searchBox = ref)

	render() {
		return (
			<MapConsumer>
				{({ handleAddLocation }) => (
					<StandaloneSearchBox
						ref={this.onSearchBoxMounted}
						onPlacesChanged={this.handlePickPlace(handleAddLocation)}
					>
						<input type="text" placeholder="Start typing a place..." className="searchBox" />
					</StandaloneSearchBox>
				)}
			</MapConsumer>
		)
	}
}

export default Search
