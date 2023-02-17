import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
const mapContainerStyle = {
    height: "90vh",
    width: "100%",
};

function Mymap() {

    const center = {
        lat: 19.997454,
        lng: 73.789803
    };


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCx4nMURq31FCbPZn8k-vrNJt8nwOEZwrg",
    });
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <>
            <div className="w-full p-3">
                <h1 className=" flex justify-center">Alert!</h1>
                <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerStyle={mapContainerStyle}
                >
                    <Marker position={center} />
                </GoogleMap>
            </div>
        </>
    )
}


export default Mymap;
