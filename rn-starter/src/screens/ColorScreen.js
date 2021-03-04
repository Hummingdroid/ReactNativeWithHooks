import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]); // We setup colors as an array because , it will contain multiple 3 numbered rgb string values

  console.log(colors);

   // keyExtractor={()=>{}} fat arrow argument 'item' is a unique value of 'rgb(255,13,whatever' and we are making it 
   // a key each time key extractors inner fat arrow function
   // is ran. cause its a string and unique. It returns a unique key for each item in the colors array

  // renderItem(()=>{}) fat arrow funciton is ran for each item in the array. Example item == 'rgb(255,0,17)'

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

    

        <FlatList 
        data={colors}
        keyExtractor={(item)=> {
          return {item}
        }
       

        renderItem={({item})=>{
          
          return <View style={{height: 100, width: 100, backgroundColor: item}}/>
        }}

        />

    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
