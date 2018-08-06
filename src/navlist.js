import React, { Component } from 'react';
import './App.css';


class Navlist extends Component {

  render() {
   return(
<div id='nav-container'>
     <div id='coffee-list'>
<ul className='list' aria-label='coffe shops address list' tabIndex='4'>
{this.props.coffeeArray.map((coffee,i)=> <li aria-label='coffee shop address' className='coffee-item' tabIndex={i+6} key={coffee.id} id={coffee.id} onClick={(e)=>this.props.updateInfoState(e.target.getAttribute('id'))}> {coffee.location.address}</li>)}
</ul>
</div>
</div>
)}}

export default Navlist;
