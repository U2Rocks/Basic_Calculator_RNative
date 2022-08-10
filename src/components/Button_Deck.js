import { View, Text, StyleSheet} from 'react-native'
import design from '../constants/global'
import Button from './Button'

// edge case: if operator pressed when both SO and FO are full then calculate
// calculation-> get value of calculation -> update history -> setprevNum with calculated value -> reset FO/SO/OP

const Button_Deck = ({ 
    setHistory, 
    setFOperand, 
    setOperation, 
    setPrevNum, 
    progFOperand, 
    curOperation, 
    progSOperand,
    setSOperand,
    resetCalc,
    prevNum 
}) => {

    // function for CE button
    const buttonCE = () => {
        resetCalc()
    }

    // functions to set the operator
    const changeToAddition = () => {setOperation("+")}
    const changeToSubtraction = () => {setOperation("-")}
    const changeToDivision = () => {setOperation("÷")}
    const changeToMultiplication = () => {setOperation("x")}
    // resetOperation not being used right now because reset calc does the same thing
    const resetOperation = () => {setOperation(null)}

    // functions to add to the current number
    const addOne = () => {
        if(!progFOperand || !curOperation){
            setPrevNum(null)
            setFOperand(1)
            //console.log("FOperand(first): " + progFOperand)
        }
        if (progFOperand && !curOperation){
            let newFirst = progFOperand + "1"
            setFOperand(parseInt(newFirst))
            //console.log("FOperand: " + progFOperand)
        }
        if (progFOperand && curOperation && !progSOperand){
            setSOperand(1)
            //console.log("SOperand(first): " + progSOperand)
        }
        if (progFOperand && curOperation && progSOperand){
            let newSecond = progSOperand + "1"
            setSOperand(parseInt(newSecond))
            //console.log("SOperand: " + progSOperand)
        }
    }

    const addTwo = () => {
        if(!progFOperand || !curOperation){
            setPrevNum(null)
            setFOperand(2)
            //console.log("FOperand(first): " + progFOperand)
        }
        if (progFOperand && !curOperation){
            let newFirst = progFOperand + "2"
            setFOperand(parseInt(newFirst))
            //console.log("FOperand: " + progFOperand)
        }
        if (progFOperand && curOperation && !progSOperand){
            setSOperand(2)
            //console.log("SOperand(first): " + progSOperand)
        }
        if (progFOperand && curOperation && progSOperand){
            let newSecond = progSOperand + "2"
            setSOperand(parseInt(newSecond))
            //console.log("SOperand: " + progSOperand)
        }
    }

    const addThree = () => {
        if(!progFOperand || !curOperation){
            setPrevNum(null)
            setFOperand(3)
            //console.log("FOperand(first): " + progFOperand)
        }
        if (progFOperand && !curOperation){
            let newFirst = progFOperand + "3"
            setFOperand(parseInt(newFirst))
            //console.log("FOperand: " + progFOperand)
        }
        if (progFOperand && curOperation && !progSOperand){
            setSOperand(3)
            //console.log("SOperand(first): " + progSOperand)
        }
        if (progFOperand && curOperation && progSOperand){
            let newSecond = progSOperand + "3"
            setSOperand(parseInt(newSecond))
            //console.log("SOperand: " + progSOperand)
        }
    }

    const addFour = () => {
        if(!progFOperand || !curOperation){
            setPrevNum(null)
            setFOperand(4)
            //console.log("FOperand(first): " + progFOperand)
        }
        if (progFOperand && !curOperation){
            let newFirst = progFOperand + "4"
            setFOperand(parseInt(newFirst))
            //console.log("FOperand: " + progFOperand)
        }
        if (progFOperand && curOperation && !progSOperand){
            setSOperand(4)
            //console.log("SOperand(first): " + progSOperand)
        }
        if (progFOperand && curOperation && progSOperand){
            let newSecond = progSOperand + "4"
            setSOperand(parseInt(newSecond))
            //console.log("SOperand: " + progSOperand)
        }
    }

    const addFive = () => {
        if(!progFOperand || !curOperation){
            setPrevNum(null)
            setFOperand(5)
            //console.log("FOperand(first): " + progFOperand)
        }
        if (progFOperand && !curOperation){
            let newFirst = progFOperand + "5"
            setFOperand(parseInt(newFirst))
            //console.log("FOperand: " + progFOperand)
        }
        if (progFOperand && curOperation && !progSOperand){
            setSOperand(5)
            //console.log("SOperand(first): " + progSOperand)
        }
        if (progFOperand && curOperation && progSOperand){
            let newSecond = progSOperand + "5"
            setSOperand(parseInt(newSecond))
            //console.log("SOperand: " + progSOperand)
        }
    }

    const addSix = () => {
        if(!progFOperand || !curOperation){
            setPrevNum(null)
            setFOperand(6)
            //console.log("FOperand(first): " + progFOperand)
        }
        if (progFOperand && !curOperation){
            let newFirst = progFOperand + "6"
            setFOperand(parseInt(newFirst))
            //console.log("FOperand: " + progFOperand)
        }
        if (progFOperand && curOperation && !progSOperand){
            setSOperand(6)
            //console.log("SOperand(first): " + progSOperand)
        }
        if (progFOperand && curOperation && progSOperand){
            let newSecond = progSOperand + "6"
            setSOperand(parseInt(newSecond))
            //console.log("SOperand: " + progSOperand)
        }
    }

    const addSeven = () => {
        if(!progFOperand || !curOperation){
            setPrevNum(null)
            setFOperand(7)
            //console.log("FOperand(first): " + progFOperand)
        }
        if (progFOperand && !curOperation){
            let newFirst = progFOperand + "7"
            setFOperand(parseInt(newFirst))
            //console.log("FOperand: " + progFOperand)
        }
        if (progFOperand && curOperation && !progSOperand){
            setSOperand(7)
            //console.log("SOperand(first): " + progSOperand)
        }
        if (progFOperand && curOperation && progSOperand){
            let newSecond = progSOperand + "7"
            setSOperand(parseInt(newSecond))
            //console.log("SOperand: " + progSOperand)
        }
    }

    const addEight = () => {
        if(!progFOperand || !curOperation){
            setPrevNum(null)
            setFOperand(8)
            //console.log("FOperand(first): " + progFOperand)
        }
        if (progFOperand && !curOperation){
            let newFirst = progFOperand + "8"
            setFOperand(parseInt(newFirst))
            //console.log("FOperand: " + progFOperand)
        }
        if (progFOperand && curOperation && !progSOperand){
            setSOperand(8)
            //console.log("SOperand(first): " + progSOperand)
        }
        if (progFOperand && curOperation && progSOperand){
            let newSecond = progSOperand + "8"
            setSOperand(parseInt(newSecond))
            //console.log("SOperand: " + progSOperand)
        }
    }

    const addNine = () => {
        if(!progFOperand || !curOperation){
            setPrevNum(null)
            setFOperand(9)
            //console.log("FOperand(first): " + progFOperand)
        }
        if (progFOperand && !curOperation){
            let newFirst = progFOperand + "9"
            setFOperand(parseInt(newFirst))
            //console.log("FOperand: " + progFOperand)
        }
        if (progFOperand && curOperation && !progSOperand){
            setSOperand(9)
            //console.log("SOperand(first): " + progSOperand)
        }
        if (progFOperand && curOperation && progSOperand){
            let newSecond = progSOperand + "9"
            setSOperand(parseInt(newSecond))
            //console.log("SOperand: " + progSOperand)
        }
    }

    const addZero = () => {
        if(progFOperand === "" || !curOperation){
            setPrevNum(null)
            setFOperand(0)
            //console.log("FOperand(first): " + progFOperand)
        }
        if ((progFOperand && !curOperation) || (progFOperand === 0 && !curOperation)){
            let newFirst = progFOperand + "0"
            setFOperand(parseInt(newFirst))
            //console.log("FOperand: " + progFOperand)
        }
        if (progFOperand && curOperation && !progSOperand){
            setSOperand(0)
            //console.log("SOperand(first): " + progSOperand)
        }
        if (progFOperand && curOperation && progSOperand){
            let newSecond = progSOperand + "0"
            setSOperand(parseInt(newSecond))
            //console.log("SOperand: " + progSOperand)
        }
    }

    // function to calculate equation and reset values
    const calculateEquation = () => {
        if ((curOperation === null || !progSOperand) && progSOperand !== 0) return
        if (curOperation === "+") { 
            setPrevNum(progFOperand + progSOperand)
            if ((progFOperand + progSOperand) === 0){setPrevNum("0")}
            let finalAnwser = progFOperand + progSOperand
            if ((progFOperand + progSOperand) === 0){finalAnwser = "0"}
            setHistory(finalAnwser)
        }
        if (curOperation === "-") { 
            setPrevNum(progFOperand - progSOperand)
            if ((progFOperand - progSOperand) === 0){setPrevNum("0")}
            let finalAnwser = progFOperand - progSOperand
            if ((progFOperand - progSOperand) === 0){finalAnwser = "0"}
            setHistory(finalAnwser)
        }
        if (curOperation === "÷") {
            if (progFOperand === 0 || progSOperand === 0 ){
                setPrevNum("Cannot Divide by Zero")
            } else {
                setPrevNum(progFOperand / progSOperand)
                if ((progFOperand / progSOperand) === 0){setPrevNum("0")}
                let finalAnwser = progFOperand / progSOperand
                if ((progFOperand / progSOperand) === 0){finalAnwser = "0"}
                setHistory(finalAnwser)
            }
        }
        if (curOperation === "x") { 
            setPrevNum(progFOperand * progSOperand)
            if ((progFOperand * progSOperand) === 0){setPrevNum("0")}
            let finalAnwser = progFOperand * progSOperand
            if ((progFOperand * progSOperand) === 0){finalAnwser = "0"}
            setHistory(finalAnwser)
        }
        // console.log(`math calculated: ${progFOperand} -> ${progSOperand} = ${prevNum}`)
        resetCalc()
    }




  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button clickFunction={addSeven} symbol={7}/>
        <Button clickFunction={addEight} symbol={8}/>
        <Button clickFunction={addNine} symbol={9}/>
        <Button clickFunction={changeToDivision} symbol="÷"/>
      </View>
      <View style={styles.buttonRow}>
        <Button clickFunction={addSix} symbol={6}/>
        <Button clickFunction={addFive} symbol={5}/>
        <Button clickFunction={addFour} symbol={4}/>
        <Button clickFunction={changeToMultiplication} symbol="x"/>
      </View>
      <View style={styles.buttonRow}>
        <Button clickFunction={addThree} symbol={3}/>
        <Button clickFunction={addTwo} symbol={2}/>
        <Button clickFunction={addOne} symbol={1}/>
        <Button clickFunction={changeToSubtraction} symbol="-"/>
      </View>
      <View style={styles.buttonRow}>
        <Button clickFunction={addZero} symbol={0}/>
        <Button clickFunction={buttonCE} symbol="CE"/>
        <Button clickFunction={calculateEquation} symbol="="/>
        <Button clickFunction={changeToAddition} symbol="+"/>
      </View>
    </View>
  )
}

export default Button_Deck

const styles = StyleSheet.create({
    container: {
        backgroundColor: design.PRIMARY_COLOR,
        flex: 3,
        alignItems: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    }
})