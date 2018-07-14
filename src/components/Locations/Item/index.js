import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const LocationItem = ({ location, index }) => (
	<Fragment>
		<div>
			<b>{index}.</b> {location.name}
		</div>
	</Fragment>
)

LocationItem.propTypes = {
	location: PropTypes.object.isRequired,
	index: PropTypes.number
}

export default LocationItem
