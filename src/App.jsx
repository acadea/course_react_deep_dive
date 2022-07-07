import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Heading from './components/Heading';

function App() {
  // let abc = "123";
  const [abc, setAbc] = useState("123");

  // setTimeout(() => {
  //   // console.log('settimeout')
  //   // abc = "456";
  //   setAbc("456");
  // }, 2000);

  function changeAbc(){
    setAbc('aaaaa');
  }

  const paragraph = <p>{abc}</p>

  function sayHello(){
    console.log('heyyaya');
  }
  return (
    <div>
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
