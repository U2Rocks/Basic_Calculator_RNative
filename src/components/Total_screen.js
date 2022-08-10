import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import design from '../constants/global'

// screen where numbers will be displayed and modified
// logic will most likely like in Main_Screen component

const Total_screen = ({ historyVal, firstOP, secondOP, operator, prevVal }) => {

    const [fancyProgress, setFancyProgress] = useState(null)

    const modifiedProgess = () => {
        if (operator){
            setFancyProgress(`${firstOP} ${operator} ${secondOP}`)
        }
        if (!operator){
            setFancyProgress(firstOP)
        }
    }

    useEffect(() => {
        modifiedProgess()
    }, [firstOP, secondOP, operator, prevVal, historyVal])


  return (
    <View style={styles.container}>
      <View style={styles.numContainer}>
        <View style={styles.numRow}>
            <ScrollView horizontal>
                <Text style={styles.numText}>{historyVal}</Text>
            </ScrollView>
        </View>
        <View style={styles.numRow}>
            <ScrollView horizontal>
                <Text style={styles.numText}>{prevVal ? prevVal : fancyProgress}</Text>
            </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Total_screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: design.MAX_WIDTH,
        backgroundColor: design.PRIMARY_COLOR,
        paddingVertical: design.BASE_MARGIN,
        paddingHorizontal: design.BASE_MARGIN,
    },
    numContainer: {
        flex: 1,
        backgroundColor: design.BLACK_COLOR,
        paddingVertical: design.BASE_MARGIN,
        marginHorizontal: design.BASE_MARGIN,
        borderRadius: design.ROUNDED_CORNERS,
    },
    numRow:{
        flex: 1,
        padding: 2,
    },
    numText: {
        color: design.WHITE_COLOR,
        fontSize: 56,
    }
})