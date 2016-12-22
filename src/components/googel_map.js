import React, {Component, PropTypes} from 'react'
import {GoogleMapLoader, GoogleMap} from 'react-google-maps'


export default class GoogleMapOriginal extends Component{
  static get propTypes() {
    return {
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }
  }
  render(){
    return(
      <GoogleMapLoader
        containerElement={ <div style={{height: '100%'}}/> }
        googleMapElement={
          <GoogleMap defaultZoom={12}
            defaultCenter={{lat: this.props.lat, lng: this.props.lng}} />
        }
        />
    )
  }
}
