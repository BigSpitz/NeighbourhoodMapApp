import React, { Component } from 'react';
import './App.css';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';






const GoogleMapGazi = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 25.804281, lng: -80.1903893 }}
    defaultZoom={15}

  >

  {props.coffeeArray.map((ll,i)=><Marker key={i}
  onClick={() => {props.updateInfoState(ll.id);}}
  position={{ lat: ll.location.lat, lng: ll.location.lng }}>

  {(props.infoWindowState===ll.id) &&

  <InfoWindow>
  <div className='info-window'>
  <h4>{ll.name}</h4>

  </div>

  </InfoWindow>}


  </Marker>)}



  </GoogleMap>
));

class GoogleMaps extends Component {
  state={
url:''
  }

componentWillReceiveProps(){
console.log(this.props.coffeeArray)
}


    componentDidMount() {



      }



  lalala(id){
   fetch(`https://api.foursquare.com/v2/venues/43695300f964a5208c291fe3/photos?&client_id=${id}&client_secret=OJMU5I2IU1LZWVG0IOSHRZECKMTQVXTD2WRL51KWTNNYCDVE&v=20180731`).then(results=>results.json())
   .then(data=> data.response.photos.items[0]).then(url=>console.log(url.prefix+'200x200'+url.suffix));

  }




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
