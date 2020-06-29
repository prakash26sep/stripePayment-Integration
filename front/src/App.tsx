import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';

import Card from './card';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="shop"><h1>NOIDA ONLINE LAPTOP SHOP</h1></div>

        <div className="cards">
          <Card title="HP" details="15.6 laptop" amount={20000} />
          <Card title="ACER" details="15.6 laptop" amount={25000} />
          <Card title="LENOVO" details="15.6 laptop" amount={18000} />
          <Card title="DELL" details="15.6 laptop" amount={26000} />

        </div>

      </div>
    );
  }
}

export default App;