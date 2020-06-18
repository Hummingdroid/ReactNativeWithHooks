import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';

// Here ImageScreen is using imported ImageDetail, giving it a title, and passing
// title is a 'prop' of the ImageDetail that is passed to the ImageDetail child object
const ImageScreen = () => {
    return (
        <View>
		<ImageDetail imgSource={require('../../assets/forest.jpg')} title="Forest" score={22}/>
		<ImageDetail imgSource={require('../../assets/beach.jpg')} title="Beach"  score={5}/>
		<ImageDetail imgSource={require('../../assets/mountain.jpg')} title="Mountain" score={55} />
		<ImageDetail imgSource={require('../../assets/dog.jpg')} title="Doggy" score={33} />
		</View>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ImageScreen;