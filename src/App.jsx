import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

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

  return (
    <div>
      <h1>{abc}</h1>

      {paragraph}

      <button onClick={changeAbc} >Click me</button>
    </div>
  )
}

export default App
