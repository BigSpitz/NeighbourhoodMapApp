import React, {Component} from 'react';
import './App.css';
import GoogleMaps from './googleMaps';
import Navlist from './navlist';
import Search from './search';


// TODO: clean state's coffeArray array's Objects accepting only relevant values from result json like id, address etc
class App extends Component {
    state = {
    coffeeArray: [],
    constCoffe:[],
    infoWindowState:'',
    menuState:true,
    infotrick:true
  }

updateState(coffeeArray){
  this.setState({coffeeArray : coffeeArray});
}
updateInfoState(value){
  this.setState({infoWindowState : value});
  this.state.infotrick ? this.setState({infotrick: false})
  : this.setState({infotrick: true});

}

menuHandler=()=>{
  this.state.menuState ? this.setState({menuState: false})
  : this.setState({menuState: true})}

infotrick=()=>{
  this.state.menuState ? this.setState({menuState: false})
  : this.setState({menuState: true})}


  componentDidMount() {

    // TODO: Clean up this mess, it works and has error catches for all fetches but it is not 'readable' if I had more time it would be better, although I will continue to work on it even after sending it for review
    fetch(`https://api.foursquare.com/v2/venues/search?ll=51.515312,-0.1389957&radius=150&query=coffee&client_id=WKYFMVAN25S40USFER3ZLDFAOWZ3ZGKLZQ0QEJU1TBOXTGKT&client_secret=OJMU5I2IU1LZWVG0IOSHRZECKMTQVXTD2WRL51KWTNNYCDVE&v=20180731`)
    .then(function(response)
        {if (!response.ok) {throw Error;}return response;})
    .then(data =>data=data.json())
    .then((result)=>result.response.venues.map(coffee=>this.setState(prevState => ({ coffeeArray: [...prevState.coffeeArray, coffee] ,  constCoffe: [...prevState.constCoffe, coffee]}))))
    .catch(error=>alert('Sorry but we have encountered an error fetching the coffe places!!'))
    .then(coffee=>this.state.coffeeArray.map((coffee,i)=>fetch('https://api.foursquare.com/v2/venues/'+coffee.id+'/photos?&client_id=WKYFMVAN25S40USFER3ZLDFAOWZ3ZGKLZQ0QEJU1TBOXTGKT&client_secret=OJMU5I2IU1LZWVG0IOSHRZECKMTQVXTD2WRL51KWTNNYCDVE&v=20180731')
      .then(function(response)
         {if (!response.ok) {throw Error;}return response;})
      .then(results=>results.json())
      .then(data=> data.response.photos.items[0])
      .then(url=> url.prefix+'200x200'+url.suffix)
      .then((fullUrl)=>{let clone = this.state.coffeeArray.slice(); clone[i].url=fullUrl; this.setState({coffeeArray:clone})})
      .catch(error=>alert('Sorry but we have encountered an error getting ' + coffee.name + ' image!!'))
))}

  render() {
    return (
    <div className = "App" >
        <div id='navlist' className={this.state.menuState ? 'hidden': null}>
            <div id='search-filter'>
            <Search coffeeArray={this.state.coffeeArray} constCoffe={this.state.constCoffe} updateState={this.updateState.bind(this)} />
            </div>
        <Navlist coffeeArray={this.state.coffeeArray} updateInfoState={this.updateInfoState.bind(this)}/>
        </div>
        <main>
            <div className = "header">
                <div className='menu-icon'>
                    <img src='./menu.png' id='menu-icon' alt='humburger menu icon' onClick={this.menuHandler} tabIndex='2' role='button' aria-pressed={!this.state.menuState}/>
                    </div>
                <div id='title'>
                    <h1 tabIndex='1'>NEIGHBOURHOOD MAP</h1>
                </div>
                </div>
             <div id='map' tabIndex='-1' aria-label='map container'>
             <GoogleMaps aria-label='map' infotrick={this.state.infotrick} coffeeArray={this.state.coffeeArray}  id={this.state.id} infoWindowState={this.state.infoWindowState} updateInfoState={this.updateInfoState.bind(this)}  / >
             </div>
             <footer tabIndex='14'> Made by Nick Xeras- Udacity Neighbourhood Map for Google Developers Scholarhip <br/>
             Maps Markers used from <a target='blank' href='http://www.clker.com/'>Clker</a> and Coffe Shop details and images using <a target='blank'href='https://developer.foursquare.com/'>Foursquare API</a>
             </footer>
        </main>
    </div>
    );
  }
}

export default App;
