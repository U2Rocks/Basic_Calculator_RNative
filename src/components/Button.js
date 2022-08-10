import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import design from '../constants/global'

// this is a resuable component that takes a passdown function and a symbol to display

const Button = ({ clickFunction, symbol }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={clickFunction}>
        <Text style={styles.buttonText}>
            {symbol}
        </Text>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: design.BASE_PADDING,
        backgroundColor: design.SECONDARY_COLOR,
        height: design.BASE_HEIGHT,
        margin: 10,
        borderRadius: design.ROUNDED_CORNERS,
    },
    buttonText: {
        color: design.WHITE_COLOR,
        fontWeight: design.FONT_BOLDNESS,
        fontSize: design.FONT_SIZE,
        textAlign: 'center',
    },
    pressOverlay: {
    },
})