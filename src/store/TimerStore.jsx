import { v4 } from "uuid"

const TIMER_ACTIONS = {
  SET_TIMERS: 'set-timers',
  SET_IS_INFINITE: 'set-is-infinite',
}

const timerStore = {
  timers: [
    {
      id: v4(),
      title: 'Workout',
      duration: 3, // in sec
    }
  ],
  isInfinite: true,
}

function timerReducer(timerStore, action){
  switch(action.type){
    case TIMER_ACTIONS.SET_TIMERS:
      return {
        ...timerStore,
        timers: action.payload,
      }
    case TIMER_ACTIONS.SET_IS_INFINITE:
      return {
        ...timerStore,
        isInfinite: action.payload,
      }
  }
}

export {
  timerStore,
  TIMER_ACTIONS,
  timerReducer,
}