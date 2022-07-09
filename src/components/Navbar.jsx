import React from 'react'

export default function Navbar() {

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

  // const rendered = renderNavItems();

  return (
    <nav>

      <ul>
        {renderNavItems()}
      </ul>

    </nav>
  )
}
