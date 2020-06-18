import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// Here this child object receives props from parent ImageScreen
// and we use the title from that prop in a text element. This will
// display the title of the Image Detail, where ever ImageDetail is used.
const ImageDetail = ({imgSource, title, score}) => {
    
    return (
        <View>
		 <Image source={imgSource}/>
		 <Text>{title}</Text>
		 <Text>The Score: {score}</Text>
		</View>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ImageDetail;