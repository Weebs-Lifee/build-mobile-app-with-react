import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';


const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});
