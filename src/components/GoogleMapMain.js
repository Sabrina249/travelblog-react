import React from 'react';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import Map from './Map.js'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import postData from './post';

 
/*export class Container extends React.Component {
    render() {
        return (
            <div>
              <Map google={this.props.google} />
            </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: "AIzaSyDJNAWGfOemDBpp6RFlrsXaR-kaswW5DUk"
  })(Container)*/

  export default function MapMain() {
    const mapcenter = {
      id: 'mapcenter',
      lat: 51.633622,
      lng: 9.9952241,
    }
  
  
    return (
      <div className="App">
        <div style={{ height: '100vh' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDJNAWGfOemDBpp6RFlrsXaR-kaswW5DUk' }}
            defaultCenter={mapcenter}
            defaultZoom={4}
          >
            {postData.map(place =>(
            <Marker key={place.id} lat={place.lat} lng={place.lng}/>
            ))}
          </GoogleMapReact>
        </div>
      </div>
    )
  }

