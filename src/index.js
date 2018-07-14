import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import App from './components/App'

class Index extends Component {
  render() {
    return (
      <Fragment>
				<App />
      </Fragment>
    )
  }
}

render(<Index />, document.getElementById('root'))
