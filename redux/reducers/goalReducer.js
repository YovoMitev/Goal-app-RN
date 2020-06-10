import { ADD_GOAL, COMPLETE_GOAL, EDIT_GOAL } from '../actionTypes/goalActionTypes'

const initialState = {
  // Unique id for each goal
  id: 0,
  goals: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL: {
      const id = state.id + 1
      const goals = [
        ...state.goals,
        { ...action.payload, id, completed: false }
      ]

      return {
        ...state,
        id,
        goals
      }
    }
    case COMPLETE_GOAL: {
      const updatedGoals = state.goals.map(goal => {
        if (goal.id === action.payload) {
          return {
            ...goal,
            completed: true
          }
        }

        return goal
      })

      return {
        ...state,
        goals: updatedGoals
      }
    }
    case EDIT_GOAL: {
      const updatedGoals = state.goals.map(goal => {
        if (goal.id === action.payload.id) {
          return {
            ...action.payload
          }
        }

        return goal
      })

      return {
        ...state,
        goals: updatedGoals
      }
    }
    default:
      return state
  }
}
