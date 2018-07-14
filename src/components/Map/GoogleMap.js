import React, { Fragment } from 'react'
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps'

export default withGoogleMap(props => {
	const { locationItems, openItem } = props
	return (
		<GoogleMap
			defaultZoom={8}
			center={{lat: 5, lng: 5}}
		>
      {locationItems.map((position, i) => (
        <Fragment key={position.lng}>
          <Marker
            position={position}
            label={`${++i}`}
          />
          {openItem &&
          openItem.lng === position.lng &&
          openItem.lat === position.lat && (
            <InfoWindow
              options={{ pixelOffset: new google.maps.Size(0, -30) }}
              position={position}
            >
              <div>{position.name}</div>
            </InfoWindow>
          )}
        </Fragment>
      ))}
		</GoogleMap>
	)
})
