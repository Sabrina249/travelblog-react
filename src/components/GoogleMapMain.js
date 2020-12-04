import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import Map from './Map.js'
 
export class Container extends React.Component {
    render() {
        const style = {
            width: '50vw',
            height: '100vh',
          }
        return (
            <div>
              <Map style={style} google={this.props.google} />
            </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: "AIzaSyDJNAWGfOemDBpp6RFlrsXaR-kaswW5DUk"
  })(Container)


