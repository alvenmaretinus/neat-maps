import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapLegends from './MapLegends';
import { googleApiKey } from '../apis/google-maps';
import { randomColor } from '../helpers';
import styles from './MapContainer.module.css';

const mapStyles = {
  width: '100%',
  height: '600px',
  minWidth: '1000px'
};

export class MapContainer extends Component {
  render() {
    const { google, data } = this.props;
    let markerColor;
    let legendsData= [];

    return (
      <div className={styles.container}>
        <Map
          google={google}
          zoom={6}
          style={mapStyles}
        >
          { Object.entries(data).map(category => {
            markerColor = `#${randomColor()}`;
            legendsData.push({
              color: markerColor,
              name: category[1][0].category
            }); 
            return category[1].map((marker, index) => {
              return (
                <Marker
                  key={index}
                  position={{lat: marker.location.lat, lng: marker.location.lng}}
                  icon= {{
                    path: 'M12,2C8.134,2,5,5.134,5,9c0,5,7,13,7,13s7-8,7-13C19,5.134,15.866,2,12,2z M12,11.5c-1.381,0-2.5-1.119-2.5-2.5 c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C14.5,10.381,13.381,11.5,12,11.5z',
                    scale: 1.3,
                    fillColor: markerColor,
                    fillOpacity: 1,
                    strokeColor: markerColor
                  }}
                />
              )}
            )}
          )}
        </Map>
        <MapLegends data={legendsData} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleApiKey
})(MapContainer);
