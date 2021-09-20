import { useState } from 'react';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Function to pass message, type and show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    
    // Auto dismiss alert in 1.5sec
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // Function to switch dark and light mode
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
   <>
     {/* <Navbar title="TextUtils" aboutText = "About Us" /> */}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

     <Alert alert={alert} />

     <TextForm heading = "Enter the text to analyze" mode={mode} showAlert={showAlert} />
     {/* <About /> */}
    
   </>
  );
}

export default App;
