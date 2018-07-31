import React, { Component } from 'react';
import './App.css';
import { withGoogleMap, GoogleMap } from 'react-google-maps';



class GoogleMaps extends Component {



  render() {
   const GoogleMapPanormou = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 37.9784901, lng: 23.7118831 } }
        defaultZoom = { 16 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapPanormou
          containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};

export default GoogleMaps;
