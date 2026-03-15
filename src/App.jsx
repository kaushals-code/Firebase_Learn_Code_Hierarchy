import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { getDatabase, ref, get } from "firebase/database";
import app from "./db";


// Database 

const db = getDatabase(app);


function App() {

  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  function handleChange(event) {
    setCreds((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  //==========================ADD A NEW USER=========================//
  // async function putData() {
  //   const snapshot = await get(ref(db, "meta/userCnt"));
  //   var id = snapshot.exists() ? snapshot.val() : "000";

  //   await set(ref(db, `users/${id}`), {
  //     name: creds.username,
  //     password: creds.password
  //   });

  //   // updateUserCnt(String(Number(userCnt) + 1).padStart(userCnt.length, "0"));
  //   id = String(Number(id) + 1).padStart(id.length, "0");
  //   await set(ref(db, "meta/userCnt"), id);

  //   await setCreds({
  //     username: "",
  //     password: ""
  //   });
  // };

  //=====================UPDAT THE DATA====================//

  // async function putData() {

  //   const id = "001";
  //   await update(ref(db, `users/${id}`), {
  //     name: "Hell as F"
  //   });

  //   setCreds({
  //     username: "",
  //     password: ""
  //   });

  // }

  async function putData() {
    // var users = [];
    const snapshot = await get(ref(db, "users"));
    const dat = snapshot.val();
    // console.log(dat.length);
    console.log(Object.keys(dat).length);
  }

  return (
    <>
      <div className="login-page">
        <div className="login-card">
          <div className="login-brand">
            <span className="brand-dot" />
            <h1>Welcome back</h1>
            <p>Sign in to continue</p>
          </div>

          <div className="login-form">
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" value={creds.username} onChange={handleChange} name='username' />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" value={creds.password} onChange={handleChange} name='password' />
            </div>

            <div className="login-meta">
              <label className="remember">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button className="login-btn" onClick={putData}>
              Sign In
            </button>
          </div>

          <p className="login-footer">
            Don't have an account? <a href="#">Create one</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

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
