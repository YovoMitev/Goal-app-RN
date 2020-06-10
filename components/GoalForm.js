import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Input from './Input'
import Button from './Button'
import Card from './Card'

const GoalForm = ({
  goal,
  handleGoalChange,
  handleSaveGoal,
  handleEditGoal,
  clearGoalState,
  isEditMode = false
}) => {
  const { title, description } = goal
  return (
    <Card style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Input
          onChangeText={value => handleGoalChange('title', value)}
          value={title}
          placeholder='Type here...'
          title='Title'
        />
        <Input
          onChangeText={value => handleGoalChange('description', value)}
          value={description}
          placeholder='Type here...'
          title='Description'
          multiline
          textAlignVertical='top'
          style={{ height: 200, paddingTop: 5, paddingBottom: 5 }}
        />
      </View>
      <View style={styles.btnContainer}>
        {isEditMode ? (
          <Button name='Edit' onPress={handleEditGoal} />
        ) : (
          <>
            <Button name='Save' onPress={handleSaveGoal} />
            <Button name='Reset' onPress={clearGoalState} />
          </>
        )}
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputContainer: {
    width: 200,
    maxWidth: '80%',
    alignItems: 'center'
  },
  formContainer: {
    padding: 20,
    width: '90%',
    height: '70%',
    alignItems: 'center'
  }
})

export default GoalForm
