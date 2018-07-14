import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

class Index extends Component {
	render() {
		return (
			<div>Hello world</div>
		)
	}
}

render(<Index />, document.getElementById('root'))
