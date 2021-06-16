/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
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
          zoom={12}
          style={mapStyles}
          initialCenter={
            {
              lat: 38.13451553373591,
              lng: 13.339992502102098
            }
          }>
          <Marker
          onClick={this.onMarkerClick}
          name={'Teatro Massimo, Palermo, PA'}
          position={{lat: 38.12020988603305, lng: 13.357235274122457}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Teatro Politeama, Palermo, PA'}
          position={{lat: 38.12511083977246, lng: 13.356943784483882}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Via Uditore, Palermo, PA'}
          position={{lat: 38.1303653071614, lng: 13.325323765304637}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Via Amerigo Vespucci, Carini, PA'}
          position={{lat: 38.16911734478906, lng: 13.19470832681448}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Via Primo Carnera, Capaci, PA'}
          position={{lat: 38.177202816874065, lng: 13.238807622563973}}
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