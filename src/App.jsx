import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Heading from './components/Heading';
import Navbar from './layouts/public/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  // let abc = "123";
  
  const [abc, setAbc] = useState("123");

  function changeAbc(){
    setAbc('aaaaa');
  }

  const paragraph = <p>{abc}</p>

  function sayHello(){
    console.log('heyyaya');
  }
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='contact' element={<Contact/>} />

        </Routes>
      
      </BrowserRouter>
      
     
    </div>
  )
}

export default App
