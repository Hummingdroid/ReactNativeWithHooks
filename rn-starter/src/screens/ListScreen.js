import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Create a List that is taken in as first argument on FlatList, second Argument is renderItem
// Which uses an anonymous funtion where 'item', is the current item, then iterates the arraylist
// and renders the list on the screen
const ListScreen = () => {
        const friends = [
            { name: 'Juan Valedz', age: 22 },
            { name: ' Gomez Popesons', age: 32 },
            { name: " Jay Green", age: 28 },
            { name: " Jerry Cantrel", age: 68 },
            { name: " Wilson Phillips", age: 22 },
            { name: " Nacho Libre", age: 58 },
            { name: " JAck Ryan", age: 38 },
            { name: " JAck Byan", age: 30 },
            { name: " JAck Jill", age: 18 },

        ];

        return (
                <FlatList keyExtractor = {(key) => key.name} 
                              data = {friends} 
                        renderItem = {({item}) => {
                return <Text style={styles.textMargins}>Name: {item.name} AGE: {item.age}</Text>}
            } /> 
                );
};

// Style sheet created to style elements
// StyleShee.create({styleItem_1, styleItem_2, etc}) is used to create the styles to reference. Like CSS
const styles = StyleSheet.create({
    textStyle : {
    fontSize : 50
},
textColor :{
color: '#F44336'
},
textMargins : {
    marginVertical : 50
}
});

export default ListScreen;