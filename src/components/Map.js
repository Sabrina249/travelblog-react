import React from 'react';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import GoogleMapReact from 'google-map-react'

/*export class Map extends React.Component {
    componentDidMount() {
        this.loadMap();
      }
    
    loadMap() {
        if (this.props && this.props.google) {
          // google is available
          const {google} = this.props;
          const maps = google.maps;

          const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    // ...
  }

    render() {
      const style = {
        width: '50vw',
        height: '100vh',
        position: 'center',
      }
      return (
        <div style={style} ref='map'>
          Loading map...
        </div>
      )
    }
  }*/

