import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Heading from './components/Heading';
import Navbar from './layouts/public/navbar/Navbar';

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
      
      <Navbar/>

      <Heading 
       click={sayHello}
       color="red"
       align="center"
       size="40">
        Headinggg
       </Heading>

      <h1>{abc}</h1>

      {paragraph}

      <button onClick={changeAbc} >Click me</button>
    </div>
  )
}

export default App
