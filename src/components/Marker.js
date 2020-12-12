import marker from './marker.png'


const Marker = ({post}) => {
    return (
      <img
        src={marker}
        alt=""
        style={{ width: '40px', height: '40px', position: 'absolute', left: '-18px', top: '-35px' }}
      />
    )
  }

  export default Marker