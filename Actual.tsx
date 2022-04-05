import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimerDisplay from './components/timerDisplay'
import TimerButtons from './components/timerButtons'



const Actual = () => {
  return (
    <View>
     <TimerDisplay/>
     <TimerButtons/>
    </View>
  )
}

export default Actual

const styles = StyleSheet.create({})