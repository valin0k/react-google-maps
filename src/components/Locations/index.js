import React from 'react'
import LocationItem from './Item'
import { Consumer as MapConsumer } from '../../context/locations'

export default () => (
  <MapConsumer>
    {({ locations }) => (
      <ul className="locationsList">
        {locations.map((location, i) => (
          <li
            key={location.lng}
            className="locationItem"
          >
            <LocationItem
              key={location.lng}
              location={location}
              index={i + 1}
            />
          </li>
        ))}
      </ul>
    )}
  </MapConsumer>
)
