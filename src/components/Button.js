import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// this is a resuable component that takes a passdown function and a symbol to display

const Button = ({ clickFunction, symbol }) => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        color: "#fff",
    }
})