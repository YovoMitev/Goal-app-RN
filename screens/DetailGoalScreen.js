import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { HeaderButton, ScreenTitle, GoalForm } from '../components'
import { editGoal } from '../redux/actions/goalActions'
import { useDispatch, useSelector } from 'react-redux'

const DetailGoalScreen = ({ navigation: { getParam } }) => {
  const state = useSelector(state => state)
  const [goal, setGoal] =  useState({ ...getParam('payload') })
  const [goalTitle, setTitle] = useState(getParam('payload').title)
  const dispatch = useDispatch()
  const handleGoalChange = (name, value) => {
    setGoal({
      ...goal,
      [name]: value
    })
  }

  const handleEditGoal = () => {
    dispatch(editGoal(goal))
    setTitle(goal.title)
  }

  return (
    <View style={styles.container}>
      <ScreenTitle title={goalTitle} />
      <View style={styles.goalContainer}>
        {/* <GoalItem style={styles.goal} item={payload} titleStyles={styles.titleStyles}/> */}
        <GoalForm
          goal={goal}
          handleGoalChange={handleGoalChange}
          handleEditGoal={handleEditGoal}
          isEditMode
        />
      </View>
    </View>
  )
}

DetailGoalScreen.navigationOptions = navigationData => {
  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Test'
            iconName='ios-add-circle-outline'
            onPress={() => {
              navigationData.navigation.navigate({
                routeName: 'Create'
              })
            }}
          />
        </HeaderButtons>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  goalContainer: {
    alignItems: 'center',

    width: '100%',
    height: '100%'
  },
  goal: {
    width: 350,
    height: 450,
    overflow: 'hidden',
    borderRadius: 50
  }
})

export default DetailGoalScreen
