import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Search from '../Components/Search';

const SearchScreen = ({navigation}) => {
    return (
        <View>
            <Text h4> Where do you want to Hike?</Text>
            <Search />
        </View>
    )
}

const style = StyleSheet.create({});

export default SearchScreen;