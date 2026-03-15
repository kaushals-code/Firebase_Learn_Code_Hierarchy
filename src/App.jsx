import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { getDatabase, ref, onValue, remove } from "firebase/database";
import app from "./db";


// Database 

const db = getDatabase(app);


function App() {
  const [count, setCount] = useState(0);

  function putData(prevData) {
    remove(ref(db, "posts"));
  };

  return (
    <>
      <h1>FireBase Reactapp</h1>
      <button onClick={putData}>Click me!</button>
    </>
  )
}

export default App

// Firebase notes 
/* 

set -> changes the whole informatino the the give one.
update -> adds the changes only
push -> Pushes the info to the db with unique id's
onValue -> code onValue(ref(db, "users/kaushal"), (snapshot) => {
    const dat = snapshot.val();
    console.log(dat);
})
remove -> remove(ref(db, "users/kaushal"));

*/
