import React from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './my_great_place';

class Map extends React.Component {
  static defaultProps = {
    center: {lat: 3.018048, lng:101.675904},
    zoom: 11
  };

//bootstrapURLKeys={{ key:  }}

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>

      <MyGreatPlace lat={3.133313} lng={101.687944} text={'B'} />
      <MyGreatPlace lat={2.924419} lng={101.656985} text={'A'} />
      </GoogleMapReact>
    );
  }
}

export default Map;