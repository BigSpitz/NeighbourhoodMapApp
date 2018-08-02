import React, { Component } from 'react';
import './App.css';
import { Marker, InfoWindow } from 'react-google-maps';



class Markers extends Component {



  render() {

   return(




         <Marker position={{ lat: 25.804281, lng: -80.1903893 }}>





         </Marker>)






         {this.props.coffeeArray.map((ll,i)=><Marker key={i} position={{ lat: ll.location.lat, lng: ll.location.lng }}>

         <InfoWindow>
         <div className='info-window'>
         <h4>{ll.name}</h4>

         <p>{ll.location.formattedAddress[0]}</p>
         </div>
         </InfoWindow>




         </Marker>)}







 }
}


 export default Markers;
