import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  const [mode, setMode] = useState('light'); //wheather the Darkmode enable or not
  let toggleMode = () =>{
    if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
 <>
  <Navbar title = "CheckMate" about= "AboutUs" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
  <TextForm heading= "Enter the text to analyze below:" mode={mode}/>
  </div>
 </>
   );
  }

export default App;
