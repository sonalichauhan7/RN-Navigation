import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

function GoogleMap() {
    const [region, setRegion] = useState<any>(null);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log("Latitude:", latitude);
                console.log("Longitude:", longitude);
                setRegion({
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                });
            }
        );
    }, [])
    return (
        <View style={styles.container}>
            {region ?
                <MapView
                    style={styles.map}
                    region={region}
                >
                    <Marker coordinate={region} title="You are here" />
                </MapView>
                : null}

        </View>
    )
}

export default GoogleMap;