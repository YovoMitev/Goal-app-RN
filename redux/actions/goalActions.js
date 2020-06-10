import { ADD_GOAL, COMPLETE_GOAL, EDIT_GOAL } from '../actionTypes/goalActionTypes'

export const addGoal = payload => ({
  type: ADD_GOAL,
  payload
})

export const completeGoal = payload => ({
  type: COMPLETE_GOAL,
  payload
})

export const editGoal = payload => ({
  type: EDIT_GOAL,
  payload
})

