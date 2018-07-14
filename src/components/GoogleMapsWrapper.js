import { withGoogleMap, withScriptjs } from 'react-google-maps'

export default withScriptjs(withGoogleMap(props => props.children))
