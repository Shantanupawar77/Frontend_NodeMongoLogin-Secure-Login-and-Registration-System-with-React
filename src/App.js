import { useState } from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [user, setLoginUser] = useState({});

  return (
    <>
      <div className="App" height="100px" style={{ backgroundColor: "#E3B6AC" }}>
        <Router>
          <Routes>
            <Route exact path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login setLoginUser={setLoginUser} />} />
          </Routes>
        </Router>
       
      </div>
    </>

  );
}

export default App;


