import React, {useState} from 'react'; // useState is a hook, which is a function that adds functionality to a function component. ie: counter
import { View, Text, StyleSheet, Button } from 'react-native';


const CounterScreen = () => {
    const [count, setCounter] = useState(0);// arg is the default value
    return (
        <View>
    	
    	<Button title="Increase" onPress={()=>{ 
    		// This is bad, never modify state variable directly.
    		//count++;
    		setCounter(count + 1);
    	}}/>

    	<Button title="Decrease" onPress={()=> {
    		// This is bad, never modify state variable directly.
    		//count--;
    		setCounter(count - 1);
    	}}/>

    	<Text>Count is: {count}</Text>

	</View>
    )
};

const styles = StyleSheet.create({});

export default CounterScreen;