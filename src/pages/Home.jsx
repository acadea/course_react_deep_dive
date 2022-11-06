import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonIcon from '../components/buttons/button-icon/ButtonIcon';
import ButtonOutlined from '../components/buttons/button-outlined/ButtonOutlined';
import RoundButton from '../components/buttons/round-button/RoundButton';
import PublicLayout from '../layouts/public/PublicLayout'
import { mdiAccountBadge } from '@mdi/js';
import css from './Home.module.scss';
import Toggle from '../components/toggle/Toggle';
import EditableInput from '../components/input/EditableInput';

export default function Home(props) {

  console.log({css});


  const navigate = useNavigate();

  function onClick(){

    navigate('/contact', {
      state: {
        heyya: '12333',
      }
    })

  }

  const [checked, setChecked] = useState(true);

  return (
    <PublicLayout>

      <RoundButton>+</RoundButton>

      <ButtonOutlined>Clickk</ButtonOutlined>

      <ButtonIcon path={mdiAccountBadge} />

      <button onClick={onClick}>click</button>
      <br />

      <Toggle onChange={(e) => setChecked(e.target.checked) } value={checked}>toggle</Toggle>

      <br />

      <EditableInput value={'sup bruh'}></EditableInput>

    </PublicLayout>
  )
}
