
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
      setalert({msg: message, type: type})
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
  else{
    setmode('dark');
    showAlert("Dark Mode Has Been Enabled", "success");
    document.body.style.backgroundColor = '#2C3333';
  }
}

  return (
   <>
    <Navbar aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>

    
    <div className="container my-3">
    <Alert className="mt-4" alert={alert}/>
      <TextForm heading = "Enter Your Text" mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>
      {/* <About/> */}
    </div>
   </>
  );
}

export default App;
