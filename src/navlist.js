import React, { Component } from 'react';
import './App.css';



class Navlist extends Component {



  render() {

   return(
<div id='nav-container'>

     <div id='coffee-list'>
<ul className='list'>LIST OF COFFEE SHOPS
{this.props.coffeeArray.map(coffee=> <li className='coffee-item' key={coffee.id}> {coffee.name} </li>)}
</ul>
</div>
</div>
)
   }
}

export default Navlist;
