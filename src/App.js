import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMaps from './googleMaps';





class App extends Component {


  state = {
    coffeeArray: []
  }




 foursquareGetCoffee() {
   fetch(`https://api.foursquare.com/v2/venues/search?ll=37.9784901,23.7118831&radius=800&query=coffee&client_id=WKYFMVAN25S40USFER3ZLDFAOWZ3ZGKLZQ0QEJU1TBOXTGKT&client_secret=OJMU5I2IU1LZWVG0IOSHRZECKMTQVXTD2WRL51KWTNNYCDVE&v=20180731`)
   .then(data => data=data.json()).then((result)=>result.response.venues.map(coffee=>this.setState(prevState => ({ coffeeArray: [...prevState.coffeeArray, [coffee.location.lat,coffee.location.lng]]}))));
 }



  componentDidMount() {
  this.foursquareGetCoffee();

  }





  render() {

    return ( <div className = "App" >
      <div className = "navbar" >
      dsfgfdgfdgd </div>

      <GoogleMaps / >
      <footer > sadffffffffffffffffffffffffffffffffff
      </footer>

      </div>
    );
  }
}

export default App;
