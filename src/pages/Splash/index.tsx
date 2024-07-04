import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { LogoSplash, SplashBackground } from '../../assets';


const Splash = ({ navigation}) =>  {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp')
    }, 3000);
  }, [navigation]);
  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={LogoSplash} style={styles.logo} />
    </ImageBackground>
  )
}

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222, // Adjust the width and height as needed
    height: 105,
  },
});
