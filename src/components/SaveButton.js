import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, } from 'react-redux'
import { saveScore } from '../redux/dataSlice'

const SaveButton = () => {

  const dispatch = useDispatch()

  const handlePress = () =>{

    dispatch(saveScore())
   
  }


  return (
    <Pressable 
      onPress={handlePress}
      style={({pressed})=>[
        {
          transform:[{scale: pressed ? 0.95 : 1}]
        },
        styles.button
      ]}>

      <Text style={styles.text}>SaveButton</Text>

    </Pressable>
  )
}

export default SaveButton

const styles = StyleSheet.create({
  button:{
    width:'50%',
    backgroundColor:'blue',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems:'center',
    marginVertical:10,
  },
  text:{
    fontWeight:'bold',
    color:'white'
  }
})