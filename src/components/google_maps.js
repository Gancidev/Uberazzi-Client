/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Component } from 'react';
//Google MAPS Component
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
const mapStyles = {
    height: '500px'
  };

  
  export class MapContainer extends Component {
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
    state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={
            {
              lat: 37.5080458,
              lng: 13.6897048
            }
          }>
          <Marker
          onClick={this.onMarkerClick}
          name={'Palermo'}
          position={{lat: 38.12242903932368, lng: 13.34321042705393}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Catania'}
          position={{lat: 37.5073679743496, lng: 15.077956890763417}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Messina'}
          position={{lat: 38.19385031771301, lng: 15.547111866903386}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Trapani'}
          position={{lat: 38.0174385218262, lng: 12.536574000197803}}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4 style={{color:"dimgray"}}>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyD8adKNDwVbvN36T428SX85BZfi7I1uitE'
  })(MapContainer);