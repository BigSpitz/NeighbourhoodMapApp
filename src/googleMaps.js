import React, { Component } from 'react';
import './App.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';



class GoogleMaps extends Component {



  render() {
   const GoogleMapGazi = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 37.9784901, lng: 23.7118831 } }
        defaultZoom = { 15 }

      >
{this.props.coffeeArray.map((ll,i)=><Marker key={i} position={{ lat: ll.location.lat, lng: ll.location.lng }} />)}


      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapGazi
          containerElement={ <div style={{ height: `500px`, width: '600px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};

export default GoogleMaps;
