import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const CategoryButton = (props) => {
  const navigation = useNavigation();
  const item = props.item;
  const index = props.index;
  const categoryName = item.name;

  // Specify RGB values for colors
  const colors = [
    'rgba(30, 144, 255, 0.9)',  // Dodger Blue with 50% opacity
    'rgba(0, 128, 0, 0.9)',    // Green with 50% opacity
    'rgba(255, 165, 0, 0.9)',  // Orange with 50% opacity
    'rgba(255, 0, 0, 0.9)',    // Red with 50% opacity
    'rgba(0, 0, 0, 0.9)',      // Black with 50% opacity
    'rgba(255, 99, 71, 0.9)',  // Tomato with 50% opacity
  ];

  const handleOnPress = () => {
    navigation.navigate('QuizPage', {
      categoryID: item.id,
    });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          transform: [{ scale: pressed ? 0.95 : 1 }],
          backgroundColor: colors[index % colors.length],
        },
        styles.buttonStyle,
      ]}
      onPress={handleOnPress}
    >
      <Text style={styles.buttonText}>{categoryName}</Text>
    </Pressable>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 150,
    height: 150,
    borderWidth: 0.2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
