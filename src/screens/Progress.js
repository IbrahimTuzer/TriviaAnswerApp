import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getScoresStorage } from '../redux/progressSlice'
import { HistoryFlatlist } from "../components"
import { FontAwesome } from '@expo/vector-icons';  

const Progress = () => {
  const dispatch = useDispatch()
  const { scores } = useSelector(state => state.progress)

  useEffect(() => {
    dispatch(getScoresStorage())
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        <FontAwesome name="question-circle" size={30} color="black" /> Score History
      </Text>
      <HistoryFlatlist scoresData={scores}/>
    </SafeAreaView>
  )
}

export default Progress

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#E0F4FF"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
    marginVertical: 20,
    flexDirection: 'row', 
    alignItems: 'center',  
  }
})
