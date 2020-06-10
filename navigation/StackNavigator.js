import { createStackNavigator } from 'react-navigation-stack'
import {
  ListGoalsScreen,
  DetailGoalScreen,
  CreateGoalScreen,
  CompletedGoals
} from '../screens'

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#fa8072'
  },
  headerTintColor: '#fff5ee',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const GoalsStackNavigator = createStackNavigator(
  {
    Goals: ListGoalsScreen,
    Details: DetailGoalScreen,
    Create: CreateGoalScreen
  },
  {
    defaultNavigationOptions: defaultOptions
  }
)

const CompletedGoalsStackNavigator = createStackNavigator(
  {
    Completed: CompletedGoals,
    Details: DetailGoalScreen
  },
  {
    defaultNavigationOptions: defaultOptions
  }
)

export { GoalsStackNavigator, CompletedGoalsStackNavigator }
