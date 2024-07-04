// @ts-nocheck
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconAccount, IconAccountActive, IconHome, IconHomeActive, IconOrder, IconOrderActive } from '../../assets'

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    // if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />
    // if (label === 'Order') return isFocused ? <IconOrderActive /> : <IconOrder />
    // if (label === 'Account') return isFocused ? <IconAccountActive /> : <IconAccount />

    return (
      <Text>Udin</Text>
    )

  }
  return (
    
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
    >
      <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({})