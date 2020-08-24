import React, {useState} from 'react';
import {Input, Button, Text} from 'react-native-elements';
import Axios from 'axios';

const Search = () => {
    const [city, setCity] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const geoApi = "AIzaSyCZU67m9SoARSn7gcWUR2g6Ke8Ze4pWMNQ";

    const cityToLatLong = () => {
        Axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: city,
                key: geoApi,
            }
        }).then((results) => {
            const lat = results.data.results[0].geometry.location.lat
            const lng = results.data.results[0].geometry.location.lng
            setLat(lat)
            setLng(lng)
        })
    }

    const findHike = () => {
        Axios.get("")
    }
    return (
        <>
            <Input 
                className="city" 
                label="City" 
                value={city} 
                onChangeText={(cityName) => setCity(cityName)}
            />
            <Button title="search" onPress={() => cityToLatLong()} />
        </>
    
    )
}

export default Search;