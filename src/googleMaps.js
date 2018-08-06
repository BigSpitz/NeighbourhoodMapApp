import React, { Component } from 'react';
import './App.css';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const GoogleMapGazi = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 51.515312, lng: -0.1389957 }}
    defaultZoom={15}
  >

  {document.querySelectorAll('#map div').forEach(map=>map.setAttribute('tabIndex','-1'))}
  {document.querySelectorAll('#map *').forEach(map=>map.setAttribute('tabIndex','-1'))}
  {document.querySelectorAll('button').forEach(map=>map.setAttribute('tabIndex','-1'))}

  {props.coffeeArray.map((ll,i)=>

    (props.infoWindowState!==ll.id) ?

  <Marker key={i}
  onClick={() => {props.updateInfoState(ll.id);}}
  position={{ lat: ll.location.lat, lng: ll.location.lng }}
options={{ icon : 'http://www.clker.com/cliparts/9/M/M/q/x/M/semi-blue-pin-th.png'}}
  >
  </Marker>
:

<Marker key={i}
onClick={() => {props.updateInfoState(ll.id);}}
position={{ lat: ll.location.lat, lng: ll.location.lng }}
options={{ icon : 'http://www.clker.com/cliparts/3/A/L/8/x/i/light-green-marker-th.png'}}
>

  <InfoWindow>
  <div className='info-window'>
  <strong>Coffe Shop name:</strong>
  <p>{ll.name}</p>
  <strong>Address</strong>
  <p>{ll.location.address}</p>
  <strong>Postal Code</strong>
  <p>{ll.location.postalCode}</p>
  <img className='infophoto' src={ll.url ? ll.url : 'coffee.jpg' } alt={ll.name}/>
  </div>
  </InfoWindow>
  </Marker>
)}
  </GoogleMap>
));

class GoogleMaps extends Component {

  render() {
    return (

        <GoogleMapGazi
          containerElement={<div style={{ height: `calc(100vh - 200px)`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
          {...this.props}
        />
    );
  }
}

export default GoogleMaps;
