import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  static defaultProps = {
    center: {lat: 3.1390, lng: 101.6869},
    zoom: 11
  };

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      <AnyReactComponent 
          lat={3.13} 
          lng={101.68} 
          text={'lol'} 
        />
      </GoogleMapReact>
    );
  }
}

export default Map;