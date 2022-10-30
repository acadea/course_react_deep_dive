import React from 'react'
import { useNavigate } from 'react-router-dom'
import PublicLayout from '../layouts/public/PublicLayout'

export default function Home(props) {


  const navigate = useNavigate();

  throw new Error('heyyyaaa');
  function onClick(){

    navigate('/contact', {
      state: {
        heyya: '12333',
      }
    })

  }

  return (
    <PublicLayout>
      Home...

      <button onClick={onClick}>click</button>
    </PublicLayout>
  )
}
