import React, { Fragment } from 'react'
import { GoogleMap, withGoogleMap} from 'react-google-maps'

export default withGoogleMap(props => {
	const { locationItems, isNewLocation, handleChangeCoords, openItem, handleOpenItem } = props
	return (
		<GoogleMap
			defaultZoom={8}
			center={{lat: 5, lng: 5}}
		>

		</GoogleMap>
	)
})
