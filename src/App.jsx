import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Alert from "./Components/Alert";
import Notes from "./Components/Notes";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.removeItem("darkMode");
    }
  }, [darkMode]);

  return (
    <>
      <AlertState>
        <Router>
          <AuthState>
            <NoteState>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/notes' element={<Notes />} />
              </Routes>
            </NoteState>
          </AuthState>
        </Router>
      </AlertState>
    </>
  );
}

export default App;
