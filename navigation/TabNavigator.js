import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { GoalsStackNavigator, CompletedGoalsStackNavigator } from './StackNavigator'
import { Ionicons } from '@expo/vector-icons'

export default createBottomTabNavigator(
  {
    Goals: {
      screen: GoalsStackNavigator,
      navigationOptions: {
        tabBarIcon: data => {
          return <Ionicons name='ios-list-box' size={25} color={data.tintColor} />
        }
      }
    },
    Completed: {
      screen: CompletedGoalsStackNavigator,
      navigationOptions: {
        tabBarIcon: data => {
          return <Ionicons name='ios-star' size={25} color={data.tintColor} />
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#fa8072'
    }
  }
)
