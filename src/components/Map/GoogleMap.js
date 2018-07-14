import React, { Fragment } from 'react'
import { GoogleMap, withGoogleMap, Marker, Polyline, InfoWindow } from 'react-google-maps'

export default withGoogleMap(props => {
	const { locationItems, openItem, handleChangeCoords, handleOpenItem } = props
	return (
		<GoogleMap
			defaultZoom={8}
			center={{lat: 5, lng: 5}}
		>
      <Polyline
        path={locationItems}
        geodesic
        options={{
          strokeColor: '#ff2527'
        }}
      />
      {locationItems.map((position, i) => (
        <Fragment key={position.lng}>
          <Marker
            onClick={handleOpenItem(position)}
            position={position}
            label={`${++i}`}
            draggable
            onDragEnd={handleChangeCoords(position)}
          />
          {openItem &&
          openItem.lng === position.lng &&
          openItem.lat === position.lat && (
            <InfoWindow
              options={{ pixelOffset: new google.maps.Size(0, -30) }}
              position={position}
              onCloseClick={handleOpenItem(position)}
            >
              <div>{position.name}</div>
            </InfoWindow>
          )}
        </Fragment>
      ))}
		</GoogleMap>
	)
})
