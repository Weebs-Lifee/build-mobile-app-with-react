import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, View, Image, Text, } from 'react-native'
import {  ImageHeader, LogoPrimary, } from "../../assets";
import {  ButtonIcon, Saldo } from "../../components/";

const Home = () => {
  return (
    <View >
      <ImageBackground 
        source={ImageHeader} 
        style={styles.header}>
          <Image source={LogoPrimary} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.welcome}>Selamat Datang</Text>
            <Text style={styles.username}>Hatsune Miku</Text>
          </View>
      </ImageBackground>
      <Saldo />
      <View style={styles.layanan}>
        <Text style={styles.label}>Pelayanyan Kami</Text>
        <View style={styles.iconLayanan}>
          <ButtonIcon title="Kiloan" type="layanan"  />
          <ButtonIcon title="Satuan" type="layanan"  />
          <ButtonIcon title="Vip" type ="layanan"  />
          <ButtonIcon title="Karpet" type="layanan"  />
          <ButtonIcon title="Setrika" type ="layanan"  />
          <ButtonIcon title="Ekspress" type ="layanan"  />
        </View>
      </View>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.30,
    paddingHorizontal:30
  },
  logo: {
    width: windowWidth*0.3,
    height: windowHeight * 0.06,
    marginTop: 10,
  },
  username: {
    marginTop:10,
    fontSize:18,
    fontWeight: 'bold',
  },
  hello: {
    marginTop: windowHeight * 0.030,

  },
  welcome: {
    fontSize: 22,
  },

  layanan: {
    paddingHorizontal: 10,
    paddingTop: 15,
    marginHorizontal:30,
  },
  label: {
    fontSize:18,
    fontWeight:  'bold',
    marginTop: 20,
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    flexWrap: 'wrap'
  }
})