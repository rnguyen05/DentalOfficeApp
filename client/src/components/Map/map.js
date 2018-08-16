import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Row } from "reactstrap";

export class MapContainer extends Component {
  render() {
    return (
      <Row className="map-container">
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "380px", position: "relative" }}
          initialCenter={{
            lat: 34.0600359,
            lng: -118.445447
          }}
          zoom={15}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
          </InfoWindow>
        </Map>
      </Row>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyByGjyQIxNV1oGzvP4OcPDXuy0_xWh7Oj0"
})(MapContainer);
