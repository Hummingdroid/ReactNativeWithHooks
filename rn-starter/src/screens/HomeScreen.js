import React from "react"; // This gets you the React library. 
// This is also known as creating a JavaScript Object to be used to make different components work together. 
// Its NOT about rendering stuff. Like using React.createElement() etc...

import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"; // Use specific things from 'react-native' library. 
// This creates a JavaScript object to be used to allow for access to Text, StyleSheet etc.
// This is the library that makes things display on the screen
// Button is least common used. You will most of the time use TochableOpacity.


// Creating a new Component. NOT the same thing as creating a component class!!! like class DoSomething extends React.Component
// Calling props.navigation explicitly for brevity.
const HomeScreen = ({ navigation }) => {
    return (
        <View>
   <Text style={styles.text}>Home</Text>

     
     <Button 
     onPress={()=> navigation.navigate("RandomScreen")}
     title="RandomScreen"
     />

     <Button
       onPress={()=> navigation.navigate("List")}
     title="List Button"
     />

        <Button
         onPress={()=>  navigation.navigate("ImageView")}
         title ="Image Screen"
        />


        <Button
         onPress={()=>  navigation.navigate("Counter")}
         title ="Go to Counter Screen"
        />

  </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;