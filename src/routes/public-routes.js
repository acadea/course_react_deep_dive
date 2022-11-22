import Home from './../pages/Home';
import Contact from './../pages/Contact';
import React from 'react';
import Error from '../pages/Error';
import Timer from '../pages/Timer';

export const publicRoutes = [
  {
    path: '/',
    element: React.createElement(Home),
    errorElement: React.createElement(Error),
  },
  {
    path: '/contact',
    element: React.createElement(Contact),
  },
  {
    path: '/timer',
    element: React.createElement(Timer),
  },
];