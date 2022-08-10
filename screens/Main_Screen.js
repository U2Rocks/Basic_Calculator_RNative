import { View, StyleSheet, StatusBar } from 'react-native'
import { useState } from 'react'
import Button_Deck from '../src/components/Button_Deck'
import Total_screen from '../src/components/Total_screen'


// NOTE: Cannot type a bunch of zeroes in a row for first or second operand
// -- Zeros are falsy and cause logic errors for buttons

const Main_Screen = () => {
  // holds record of last math equation(string form)
  const [mathHistory, setMathHistory] = useState("112 x 2 = 224")
  // holds record of current math equation being done
  const [firstOperand, setFirstOperand] = useState("")
  const [secondOperand, setSecondOperand] = useState("")
  // holds operation type for calculation(addition/subtraction/divison/multiplication)
  const [operationType, setOperationType] = useState(null)
  // holds anwser to previous problem(use to display anwser after calculation)
  const [prevAnwser, setPrevAnwser] = useState("")

  // updates history bar above the calculation bar
  const updateHistory = ( final ) => {
    setMathHistory(`${firstOperand} ${operationType} ${secondOperand} = ${final}`)
  }

  // this function resets calculation values after equals button pressed
  const resetCalculations = () => {
    setFirstOperand("")
    setSecondOperand("")
    setOperationType(null)
  }



  return (
    <View style={styles.container}>
        <Total_screen historyVal={mathHistory} firstOP={firstOperand} secondOP={secondOperand} operator={operationType} prevVal={prevAnwser}/>
        <Button_Deck prevNum={prevAnwser} resetCalc={resetCalculations} curOperation={operationType} progFOperand={firstOperand} setHistory={updateHistory} setFOperand={setFirstOperand} setOperation={setOperationType} setPrevNum={setPrevAnwser} progSOperand={secondOperand} setSOperand={setSecondOperand}/>
        <StatusBar theme="light"/>
    </View>
  )
}

export default Main_Screen

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingTop: 15,
    }
})