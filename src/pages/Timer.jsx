import React from 'react'
import PropTypes from 'prop-types'
import PublicLayout from '../layouts/public/PublicLayout'
import Tooltip from '../components/tooltip/Tooltip'
import TimerList from '../containers/timer/TimerList'
import ButtonOutlined from '../components/buttons/button-outlined/ButtonOutlined'
import Toggle from '../components/toggle/Toggle'
import { useGlobalContext } from '../store/GlobalStore'
import { TIMER_ACTIONS } from '../store/TimerStore'
import { v4 } from 'uuid'

function Timer(props) {

  const {timer: timerStore} = useGlobalContext();

  const timers = timerStore.state.timers;

  function addTimer(){
    timerStore.dispatch({
      type: TIMER_ACTIONS.SET_TIMERS,
      payload: [
        ...timers,
        {
          id: v4(),
          title: 'Unknown',
          duration: 30,
        }
      ]
    })
  }

  return (
    <PublicLayout>

      {/* header */}
      <h1 className="text-3xl text-center">Timers

        <Tooltip tooltip="Add new timer">
          <button onClick={addTimer} className="px-5">+</button>

        </Tooltip>

      </h1>
      {/* cards */}

      <TimerList/>

      {/* start */}
      <div className='flex justify-center items-center'>

        <ButtonOutlined>Start</ButtonOutlined>

        <Toggle>Loop indefinitely</Toggle>

      </div>

    </PublicLayout>
  )
}

Timer.propTypes = {}

export default Timer