import React, {useState} from 'react';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import Map from './Map.js'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import post from './post';
import Infowindow from './InfoWindow'
import MapStyle from './GoogleMapMainStyle'

 
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
    apiKey: ""
  })(Container)*/

  export default function MapMain() {
  const [selected, setSelected] = useState(null)
  const handleShowInfo = post => {
    setSelected(post)
    console.log(post)
  }

  const handleCloseInfo = event => {
  setSelected(null)
  console.log("hello")
  }

    const mapcenter = {
      id: 'mapcenter',
      lat: post[0].lat,
      lng: post[0].lng,
    }
  
  
    return (
      <div className="App">
        <div style={{ height: '100vh', margin: '20px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:'' }}
            defaultCenter={mapcenter}
            defaultZoom={3}
            options={{ styles: MapStyle }}
          >
            {post.map(place =>(<Marker key={place.id} lat={place.lat} lng={place.lng} showInfo={(event => handleShowInfo(place))}/>))}
            {selected && (

              <Infowindow
               post={selected}
               /*title={selected.title}
                author={selected.authorsname}
                visitingdate={selected.visitingdate}
                authorsimg={selected.authorsimg}*/
                closeInfo={handleCloseInfo}
                /*lng={selected.lng}
                lat={selected.lat}
                id={selected.id}*/
  
              />
            )}
          </GoogleMapReact>
        </div>
      </div>
    )
  }

