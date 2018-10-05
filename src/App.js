import React, { Component } from 'react';
import './App.css';

import Map from  './Map';

class App extends Component {
  state = { landingPageOpen: true }
  
  render() {
    const {landingPageOpen} = this.state;
    return (
      <div className="App">
       <button onClick={ () => {this.setState({ landingPageOpen: !landingPageOpen })}}> go to listing page</button>
            { landingPageOpen? <div className="leaflet-containe"> <Map></Map> </div> : <div> other component here </div>}
      </div>
    );
}
  
}

export default App;
