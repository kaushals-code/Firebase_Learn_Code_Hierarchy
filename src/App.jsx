import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { getDatabase, ref, set } from "firebase/database";
import app from "./db";


// Database 

const db = getDatabase(app);


function App() {
  const [count, setCount] = useState(0);

  function putData() {
    set(ref(db, "users/kaushal"), {
      id: 1,
      userName: "Kaushal Singh",
      age: 18
    });
  };

  return (
    <>
      <h1>FireBase Reactapp</h1>
      <button onClick={putData}>Click me!</button>
    </>
  )
}

export default App
