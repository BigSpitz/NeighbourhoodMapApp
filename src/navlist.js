import React, { Component } from 'react';
import './App.css';



class Navlist extends Component {
  state={

  }



  render() {

   return(
<div id='nav-container'>

     <div id='coffee-list'>
<ul className='list'>
{this.props.coffeeArray.map(coffee=> <li className='coffee-item'  key={coffee.id} id={coffee.id}> {coffee.location.address}</li>)}
</ul>
</div>
</div>
)
   }
}

export default Navlist;
