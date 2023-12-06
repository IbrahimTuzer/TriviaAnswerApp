import React, { useState } from 'react'

import { 
  Pressable, 
  StyleSheet, 
  Text,
  View, 
  } from 'react-native'

  import { useSelector, useDispatch} from 'react-redux'

  import { setCorrectAnswer, setIncorrectAnswer } from '../redux/dataSlice'



const AnswerBox = (props) => {

  const { currentQuestionIndex, score} = useSelector(state => state.data)

  console.log("Question Index: " , currentQuestionIndex)
  console.log("Score: ", score)

  const dispatch = useDispatch()

  const answers = props.sendData

  const inCorrectAnswer = answers[currentQuestionIndex]?.incorrect_answers
  const correctAnswer = answers[currentQuestionIndex]?.correct_answer
  
  const array = answers && inCorrectAnswer &&  [correctAnswer, ...inCorrectAnswer]

  const shuffledArray =  array?.sort(()=> Math.random() - 0.5)

  const [ifTrue, setIfTrue] = useState(null)


  const handleOnPress =(value)=>{
    const checkIfTrue =  value === correctAnswer

    setIfTrue(checkIfTrue)

    checkIfTrue
          ?  dispatch(setCorrectAnswer())
          :  dispatch(setIncorrectAnswer())
  }


  return (
    <View style={styles.container}>

      {
        shuffledArray?.map((value,index)=>{
          return(
            <Pressable
              key={index}
              onPress={ ()=> handleOnPress(value) }

              style={({pressed})=> [{
                transform:[{scale: pressed ? 0.95 : 1}]

              }, styles.buttonStyle]}>

                  <Text style={styles.optionsText}>{value}</Text>

            </Pressable>
          )
        })
      }
      


    </View>
  )
}

export default AnswerBox

const styles = StyleSheet.create({
  container:{
    width:'100%'
  },
  buttonStyle:{
    borderWidth:1,
    borderRadius:10,
    width:'100%',
    paddingVertical:12,
    alignItems:'center',
    backgroundColor:'white',
    marginVertical:10,
  },
  optionsText:{
    fontWeight:'bold'
  }
})