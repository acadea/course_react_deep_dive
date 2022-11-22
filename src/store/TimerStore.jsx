import { v4 } from "uuid"

const TIMER_ACTIONS = {
  SET_TIMERS: 'set-timers',
}

const timerStore = {
  timers: [
    {
      id: v4(),
      title: 'Workout',
      duration: 3, // in sec
    }
  ]
}

function timerReducer(timerStore, action){
  switch(action.type){
    case TIMER_ACTIONS.SET_TIMERS:
      return {
        ...timerStore,
        timers: action.payload,
      }
  }
}

export {
  timerStore,
  TIMER_ACTIONS,
  timerReducer,
}