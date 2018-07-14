import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const LocationItem = ({ location, handleRemoveLocation, index }) => (
  <Fragment>
    <div>
      <b>{index}.</b> {location.name}
    </div>
    <button onClick={handleRemoveLocation(location)}>✖</button>
  </Fragment>
)

LocationItem.propTypes = {
  location: PropTypes.object.isRequired,
  handleRemoveLocation: PropTypes.func,
  index: PropTypes.number
}

export default LocationItem
