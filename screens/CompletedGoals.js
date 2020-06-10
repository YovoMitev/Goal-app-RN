import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { ScreenTitle, GoalItem } from '../components'
import { useSelector } from 'react-redux'

export default ({ navigation: { navigate } }) => {
  const completedGoals = useSelector(state =>
    state.goals.filter(goal => goal.completed)
  )

  const handleDetailPress = (item) => {
    navigate({
      routeName: 'Details',
      params: { payload: { ...item } }
    })
  }

  const renderListItem = ({ item }) => {
    return (
      <GoalItem
        item={item}
        style={styles.listItem}
        handleDetailPress={handleDetailPress}
        onPress={() => {
          navigate({
            routeName: 'Details',
            params: { payload: { ...item } }
          })
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <ScreenTitle title='Completed Goals' />
      {completedGoals.length === 0 ? (
        <Text>You don't have completed goals ;(</Text>
      ) : (
        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={item => `${item.id}-item`}
            contentContainerStyle={{ flexGrow: 1 }}
            data={completedGoals}
            renderItem={renderListItem}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  listItem: {
    width: 300,
    height: 200,
    margin: 20,
    // overflow: 'hidden',
    borderRadius: 50
  },
  goalsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '90%'
  }
})
