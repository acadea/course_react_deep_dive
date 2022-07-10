import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import css from "./Navbar.module.css";

export default function Navbar() {

  console.log(css);

  const navItems = [
    {
      title: 'Home',
      href: '#',
    },
    {
      title: 'Contact',
      href: '#',
    },
    {
      title: 'About',
      href: '#',
    },
    {
      title: 'About me',
      href: '#',
    }

  ];

  function renderNavItems() {
    return navItems.map((navItem) => (
      <li key={navItem.title}>
        <a href={navItem.href}>{navItem.title}</a>
      </li>
    ))
  }


  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  // listen to all state changes
  useEffect(() => {
    // logic
    console.log('listen to all');
  })

  // not listening to any state change
  // will trigger only once when the component was mounted
  useEffect(() => {
    // logic
    console.log('once onlyyy')
  }, [])

  // listen to state passed in only
  useEffect(() => {
    // logic
    console.log('counter A is changing')
  }, [counterA]);

  return (
    <nav className={css.nav}>
      <ul>
        {renderNavItems()}
      </ul>

    </nav>
  )
}
