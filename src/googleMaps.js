import React, { Component } from 'react';
import './App.css';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';



const GoogleMapGazi = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 25.804281, lng: -80.1903893 }}
    defaultZoom={15}

  >

  {props.coffeeArray.map((ll,i)=><Marker key={i} position={{ lat: ll.location.lat, lng: ll.location.lng }}>

  <InfoWindow>
  <div className='info-window'>
  <h4>{ll.name}</h4>

  <p>{ll.location.formattedAddress[0]}</p>
  </div>
  </InfoWindow>
  </Marker>)}



  </GoogleMap>
));

class GoogleMaps extends Component {
  render() {
    return (
      <div>
        <GoogleMapGazi
          containerElement={<div style={{ height: `500px`, width: "600px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
          {...this.props}
        />
      </div>
    );
  }
}

export default GoogleMaps;
