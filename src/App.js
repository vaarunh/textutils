
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'



function App() {
  const [mode, setmode] = useState('light');

const toggleMode = () => {
  if (mode === 'dark') {
    setmode('light');
    document.body.style.backgroundColor = 'white';
  }
  else{
    setmode('dark');
    document.body.style.backgroundColor = '#2C3333';
  }
}

  return (
   <>
    <Navbar aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading = "Enter Your Text" mode={mode} toggleMode={toggleMode}/>
      {/* <About/> */}
    </div>
   </>
  );
}

export default App;
