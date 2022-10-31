import React from 'react'
import { useNavigate } from 'react-router-dom'
import Price from '../components/Price';
import PublicLayout from '../layouts/public/PublicLayout'
import css from './Home.module.scss';

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

  return (
    <PublicLayout>

      <div className={css.container}>
        <h1 className={css.title}>Home...</h1>
      </div>

      <Price value={[]} />

      <button onClick={onClick}>click</button>
    </PublicLayout>
  )
}
