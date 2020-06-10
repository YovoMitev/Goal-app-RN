import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { GoalForm, ScreenTitle } from '../components'
import { useDispatch } from 'react-redux'
import { addGoal } from '../redux/actions/goalActions'

export default props => {
  const [goal, setGoal] = useState({})
  const dispatch = useDispatch()

  const handleGoalChange = (name, value) => {
    setGoal({
      ...goal,
      [name]: value
    })
  }

  const handleSaveGoal = () => {
    dispatch(addGoal(goal))
    clearGoalState()
  }

  const clearGoalState = () => {
    setGoal({})
  }

  return (
    <View style={styles.container}>
      <ScreenTitle title='Create Goal' />
      <GoalForm
        handleGoalChange={handleGoalChange}
        goal={goal}
        handleSaveGoal={handleSaveGoal}
        clearGoalState={clearGoalState}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
})
