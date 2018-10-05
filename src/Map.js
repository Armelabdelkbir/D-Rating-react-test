import React,{Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';



class MapArmel extends React.Component {
    constructor() {
      super();
      this.state = {
        markers: [[51.505, -0.09]]
      };
    }
    
    /*addMarker = (e) => {
      const {markers} = this.state
      markers.push(e.latlng)
      this.setState({markers})
    }*/
  
    render() {
      return (
        <Map 
          center={[51.505, -0.09]} 
         // onClick={this.addMarker}
          zoom={10} 
          >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {this.state.markers.map((position, idx) => 
            <Marker key={`marker-${idx}`} position={position}>
            
          </Marker>
          )}
        </Map>
      );
    }
  }
export default MapArmel;