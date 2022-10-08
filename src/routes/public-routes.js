import Home from './../pages/Home';
import Contact from './../pages/Contact';
import React from 'react';

export const publicRoutes = [
  {
    path: '/',
    element: React.createElement(Home),
  },
  {
    path: '/contact',
    element: React.createElement(Contact),
  },
];