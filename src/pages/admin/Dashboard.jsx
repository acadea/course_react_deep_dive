import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dashboard(props) {


  const navigate = useNavigate();

  useEffect(() => {

    // check if user is admin 
    const isAdmin = true;

    // if not redirect the user to /
    if(!isAdmin){
      navigate('/');
    }


  }, []);

  return (
    <div>Dashboard</div>
  )
}
