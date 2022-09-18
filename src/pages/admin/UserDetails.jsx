import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function UserDetails(props) {

  const loaderData = useLoaderData();

  console.log({loaderData});

  return (
    <div>UserDetails</div>
  )
}
