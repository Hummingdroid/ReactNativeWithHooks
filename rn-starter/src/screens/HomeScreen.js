import React from "react"; // This all about how different components work together
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"; // Use specific things from 'react-native' library. 
// This is the library that makes things display on the screen
// Button is least common used. You will most of the time use TochableOpacity


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
         title ="ImageScreen"
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