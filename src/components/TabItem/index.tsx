// @ts-nocheck
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconAccount, IconAccountActive, IconHome, IconHomeActive, IconOrder, IconOrderActive } from '../../assets'
import {disable_color, primary_color} from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label}:any) => {

  const Icon = () => {
    if (label === 'Home') return isFocused ? <Image source={IconHomeActive} /> : <Image source={IconHome} /> 
    if (label === 'Order') return isFocused ? <Image source={IconOrderActive} /> :  <Image source={IconOrder} /> 
    if (label === 'Account') return isFocused ?  <Image source={IconAccountActive} /> :  <Image source={IconAccount} /> 

    return <IconHome />

  }
 
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <View style={styles.container}>
      <Icon />
      </View>
      {/* <Image source={IconAccount} /> */}
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? primary_color: disable_color,
    marginTop: 8,
  })
})
