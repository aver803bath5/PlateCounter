import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlatesCounter from './components/plates_counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Plate Counter</Text>
      <PlatesCounter />
      <Text>Opefdsafdsan up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
