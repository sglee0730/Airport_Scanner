import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = (props) => {
    const mapStyles = {
        height: "50%",
        width: "100%"
    };

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyAtRVAVV8hkwP-agpZVM-_gy3d6FvG-3zs'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={props.center} 
            />
        </LoadScript>
    )
}

export default MapContainer;