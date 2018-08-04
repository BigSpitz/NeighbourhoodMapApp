import React, {Component} from 'react';
import './App.css';
import GoogleMaps from './googleMaps';
import Navlist from './navlist';
import Search from './search';
import waterfall from 'async/waterfall';

class App extends Component {
  state = {
    coffeeArray: [],
    constCoffe:[],
    infoWindowState:'',
    url:''


  }
getCoffeArray(result){result.response.venues.map(coffee=>this.setState(prevState => ({ coffeeArray: [...prevState.coffeeArray, coffee] ,  constCoffe: [...prevState.constCoffe, coffee]})))}

updateState(coffeeArray){
  this.setState({coffeeArray : coffeeArray});
}
updateInfoState(value){
  this.setState({infoWindowState : value});
}
updateUrlState(url){
  this.setState({url : url});
}

 foursquareGetCoffee() {
   fetch(`https://api.foursquare.com/v2/venues/search?ll=25.804281,-80.189295&radius=800&query=coffee&client_id=WKYFMVAN25S40USFER3ZLDFAOWZ3ZGKLZQ0QEJU1TBOXTGKT&client_secret=OJMU5I2IU1LZWVG0IOSHRZECKMTQVXTD2WRL51KWTNNYCDVE&v=20180731`)
   .then(data => data=data.json()).then((result)=>result.response.venues.map(coffee=>this.setState(prevState => ({ coffeeArray: [...prevState.coffeeArray, coffee] ,  constCoffe: [...prevState.constCoffe, coffee]}))));

 }
 foursquareGetCoffeephoto(){
  fetch('https://api.foursquare.com/v2/venues/43695300f964a5208c291fe3/photos?&client_id=WKYFMVAN25S40USFER3ZLDFAOWZ3ZGKLZQ0QEJU1TBOXTGKT&client_secret=OJMU5I2IU1LZWVG0IOSHRZECKMTQVXTD2WRL51KWTNNYCDVE&v=20180731')
  .then(results=>results.json()).then(data=>this.setState(prevState => ({ test: [...prevState.test, data.response.photos.items[0]]})));
 }


 lalala(something){
  fetch(`https://api.foursquare.com/v2/venues/43695300f964a5208c291fe3/photos?&client_id=WKYFMVAN25S40USFER3ZLDFAOWZ3ZGKLZQ0QEJU1TBOXTGKT&client_secret=OJMU5I2IU1LZWVG0IOSHRZECKMTQVXTD2WRL51KWTNNYCDVE&v=20180731`).then(results=>results.json())
  .then(data=> data.response.photos.items[0]).then(url=>console.log(url.prefix+'200x200'+url.suffix));
 }



  componentDidMount() {

    fetch(`https://api.foursquare.com/v2/venues/search?ll=25.804281,-80.189295&radius=800&query=coffee&client_id=WKYFMVAN25S40USFER3ZLDFAOWZ3ZGKLZQ0QEJU1TBOXTGKT&client_secret=OJMU5I2IU1LZWVG0IOSHRZECKMTQVXTD2WRL51KWTNNYCDVE&v=20180731`)
    .then(data => data=data.json())
    .then((result)=>{result.response.venues.map(coffee=>this.setState(prevState => ({ coffeeArray: [...prevState.coffeeArray, coffee] ,  constCoffe: [...prevState.constCoffe, coffee]})))})
    .then(coffee=>this.state.coffeeArray.map(
      coffee=>fetch('https://api.foursquare.com/v2/venues/'+coffee.id+'/photos?&client_id=WKYFMVAN25S40USFER3ZLDFAOWZ3ZGKLZQ0QEJU1TBOXTGKT&client_secret=OJMU5I2IU1LZWVG0IOSHRZECKMTQVXTD2WRL51KWTNNYCDVE&v=20180731').then(results=>results.json())
        .then(data=> data.response.photos.items[0]).then(url=>console.log(url))))  



}








  render() {







    return ( <div className = "App" >
<button onClick={()=>this.lalala()}>sddsffssfdfds </button>
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


    <GoogleMaps updateUrlState={this.updateUrlState.bind(this)} coffeeArray={this.state.coffeeArray}  id={this.state.id} infoWindowState={this.state.infoWindowState} updateInfoState={this.updateInfoState.bind(this)}  lalala={this.lalala.bind(this)}  / >

    </div>
      <footer > sadffffffffffffffffffffffffffffffffff
      </footer>
</main>
      </div>
    );
  }
}

export default App;
