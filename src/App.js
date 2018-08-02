import React, {Component} from 'react';
import './App.css';
import GoogleMaps from './googleMaps';
import Navlist from './navlist';
import Search from './search';


class App extends Component {
  state = {
    coffeeArray: [],
    constCoffe:[],
    lat:25.804281,
    lng:-80.1903893
  }

updateState(coffeeArray){
  this.setState({coffeeArray : coffeeArray});
}


 foursquareGetCoffee() {
   fetch(`https://api.foursquare.com/v2/venues/search?ll=25.804281,-80.189295&radius=800&query=coffee&client_id=WKYFMVAN25S40USFER3ZLDFAOWZ3ZGKLZQ0QEJU1TBOXTGKT&client_secret=OJMU5I2IU1LZWVG0IOSHRZECKMTQVXTD2WRL51KWTNNYCDVE&v=20180731`)
   .then(data => data=data.json()).then((result)=>result.response.venues.map(coffee=>this.setState(prevState => ({ coffeeArray: [...prevState.coffeeArray, coffee] ,  constCoffe: [...prevState.constCoffe, coffee]}))));
 }

  componentDidMount() {
  this.foursquareGetCoffee();

  }

  render() {
    return ( <div className = "App" >

    <div id='navlist'>
    <div id='search-filter'>
<Search coffeeArray={this.state.coffeeArray} constCoffe={this.state.constCoffe} updateState={this.updateState.bind(this)}/>
    </div>
    < Navlist coffeeArray={this.state.coffeeArray} />
    sdfsdfsdfsdfsdsfsdfsdfsdfdsf
    </div>
    <main>
      <div className = "header" >
      dsfgfdgfdgd </div>
<div id='map'>


    <GoogleMaps coffeeArray={this.state.coffeeArray} lat={this.state.lat} lng={this.state.lng}/ >

    </div>
      <footer > sadffffffffffffffffffffffffffffffffff
      </footer>
</main>
      </div>
    );
  }
}

export default App;
