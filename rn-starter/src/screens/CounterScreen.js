import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const CounterScreen = () => {
    // Todo fix this
    let count = 0;
    return (
        <View>
    	
    	<Button title="Increase" onPress={()=>{ 
    		count++;
    	}}/>
    	<Button title="Decrease" onPress={()=> {
    		count--;
    	}}/>

    	<Text>Count is: {count}</Text>

	</View>
    )
};

const styles = StyleSheet.create({});

export default CounterScreen;