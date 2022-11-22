import React from 'react'
import PropTypes from 'prop-types'
import { GlobalContext } from '../../store/GlobalStore'
import TimerListItem from './TimerListItem'

function TimerList(props) {

  // get all the timer objects
  // for each timer, render a card
  return (
    <GlobalContext.Consumer>
      {(store) => (
        <>
          {store.timer.state.timers.map(timer => (
            <TimerListItem timer={timer} key={timer.id} />
          ))}
        </>

      )}
    </GlobalContext.Consumer>
  )
}

TimerList.propTypes = {}

export default TimerList
