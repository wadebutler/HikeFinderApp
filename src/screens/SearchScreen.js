import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';

const SearchScreen = ({navigation}) => {
    return (
        <View>
            <Text h4> Where do you want to Hike?</Text>
            <Input label="City Name"/>
            <Button title="search" onPress={() => navigation.navigate("Results")}/>
        </View>
    )
}

const style = StyleSheet.create({});

export default SearchScreen;