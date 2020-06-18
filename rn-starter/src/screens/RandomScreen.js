import React from 'react'; // This all about how different components work together
import { Text, StyleSheet, View } from 'react-native'; // Use specific things from 'react-native' library. This is the library that makes 
//things display on screen

// We can use arrow funtions or function() here. Its just preference.
// {styles.textStyle} is a 'prop' 
const RandomScreen = () => {
    const greeting = {
        greetingOne: "Greeting  Number 1",
        greetingTwo: "Greeting Number 2",
        greetingThree: "Greeting  Number 3"
    }

    const usingJavaScriptObjects = <Text>This is a javascript object</Text>


    // Note an open parenthesis allows us to use multline on a Return statement
    return (<View> 
    <Text style = {styles.textStyle}>{greeting.greetingOne}</Text>
    <Text style = {styles.textStyle}>{greeting.greetingTwo}</Text>
    <Text style = {styles.textStyle}>{greeting.greetingThree}</Text>
    {usingJavaScriptObjects}
    
</View>)
};

// Create a style sheet to change style of tags. Not Needed but it automatically applies this style to everything.
// You can as an alternative style just the tag individually.
const styles = StyleSheet.create({

    // Create new style
    textStyle: {
        fontSize: 30
    }
});

// Export the component now
export default RandomScreen;