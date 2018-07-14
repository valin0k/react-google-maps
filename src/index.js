import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import App from './components/App'
import GoogleMapsWrapper from './components/GoogleMapsWrapper'

class Index extends Component {
  render() {
    return (
      <Fragment>
        <GoogleMapsWrapper
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `50px` }} />}
          mapElement={<span style={{ display: 'none' }} />}
        >
          <App />
        </GoogleMapsWrapper>
      </Fragment>
    )
  }
}

render(<Index />, document.getElementById('root'))
