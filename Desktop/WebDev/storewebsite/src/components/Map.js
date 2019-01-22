import React from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './my_great_place';

class Map extends React.Component {
  static defaultProps = {
    center: {lat: 3.1390, lng: 101.6869},
    zoom: 11
  };

//bootstrapURLKeys={{ key:  }}

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      <MyGreatPlace lat={3.18} lng={101.68} text={'B'} />
      <MyGreatPlace lat={3.12} lng={101.68} text={'A'} />
      </GoogleMapReact>
    );
  }
}

export default Map;