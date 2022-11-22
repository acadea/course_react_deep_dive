import React from 'react'
import PropTypes from 'prop-types'
import ButtonIcon from '../../components/buttons/button-icon/ButtonIcon'
import { mdiDelete } from '@mdi/js'
import EditableInput from '../../components/input/EditableInput'
import { useGlobalContext } from '../../store/GlobalStore'
import { TIMER_ACTIONS } from '../../store/TimerStore'

function TimerListItem({timer}) {

  const {timer: timerStore} = useGlobalContext();


  function getItemIndex(){
    return timerStore.state.timers.findIndex((item) => timer.id === item.id);
  }

  function removeItem(){
    // get index
    const indexToRemove = getItemIndex();

    // remove timer from timer store
    const timers = timerStore.state.timers;
    timerStore.dispatch({
      type: TIMER_ACTIONS.SET_TIMERS,
      payload: [
        ...timers.slice(0, indexToRemove),
        ...timers.slice(indexToRemove + 1),
      ]
    })
  }

  return (
    <div className='shadow py-10 px-5 w-60 m-3 shadow-gray-400 flex items-center justify-between'>
      
      <div>
        {/* input */}
        <EditableInput value={timer.title} style={{width: '100px'}} ></EditableInput>

        <span>Time(sec): 
          <EditableInput
            type='number'
            value={timer.duration}
            style={{width: '35px', display: 'inline'}}
          ></EditableInput>
        </span>



      </div>

      <ButtonIcon onClick={removeItem} path={mdiDelete}></ButtonIcon>

    </div>
  )
}

TimerListItem.propTypes = {}

export default TimerListItem
