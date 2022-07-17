import React from 'react'
import Navbar from './navbar/Navbar.jsx';

export default function PublicLayout(props) {
  return (
    <div>
      
      {/* navbar */}
      <Navbar/>
      {/* body */}
      {props.children}

      {/* footer */}


    </div>
  )
}
