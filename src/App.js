
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route, Routes,
  Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({ msg: message, type: type })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light');
      showAlert("Light Mode Has Been Enabled", "success");
      document.body.style.backgroundColor = 'white';
    }
    else {
      setmode('dark');
      showAlert("Dark Mode Has Been Enabled", "success");
      document.body.style.backgroundColor = '#2C3333';
    }
  }

  return (
    <>
      <Router>
        <Navbar aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
        <Alert className="mt-4" alert={alert} />
        <Routes>
            <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
