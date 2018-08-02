import React, { Component } from 'react';
import './App.css';



class Navlist extends Component {
  state={
    
  }



  render() {

   return(
<div id='nav-container'>

     <div id='coffee-list'>
<ul className='list'>LIST OF COFFEE SHOPS
{this.props.coffeeArray.map(coffee=> <li className='coffee-item' key={coffee.id}> {coffee.location.address} </li>)}
</ul>
</div>
</div>
)
   }
}

export default Navlist;
