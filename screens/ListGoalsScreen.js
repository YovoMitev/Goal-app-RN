import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { HeaderButton, ScreenTitle, GoalItem } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { completeGoal } from '../redux/actions/goalActions'

const ListGoalsScreen = ({ navigation: { navigate } }) => {
  const goals = useSelector(state => state.goals)
  const dispatch = useDispatch()

  const handleCompleteGoal = id => {
    dispatch(completeGoal(id))
  }

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
        handleCompleteGoal={handleCompleteGoal}
        handleDetailPress={handleDetailPress}
      />
    )
  }

  return (
    <View style={styles.container}>
      <ScreenTitle title='Goals List' />
      {goals.length === 0 ? (
        <Text>Go and create your first goal !</Text>
      ) : (
        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={item => `${item.id}-item`}
            contentContainerStyle={{ flexGrow: 1 }}
            data={goals}
            renderItem={renderListItem}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  goalsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '90%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  listItem: {
    width: 300,
    height: 200,
    margin: 20,
    // overflow: 'hidden',
    borderRadius: 50
  }
})

ListGoalsScreen.navigationOptions = navigationData => {
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

export default ListGoalsScreen
