import React, { useState } from 'react';
import './App.css';
import About from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({message:message,
type:type})

  }
  setTimeout(()=>{
    setAlert(null)},1500);
  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#073766';
      showAlert("Dark mode has been enabled ","success ")
      document.title='hOme-Utils';
    }
    else{
      setMode('light');
       document.body.style.backgroundColor='white';
       document.title='light-Utils';
    }
  }
  return (
    <>
    <Router basename="/textutils">
<Navbar title="TEXTY" aboutTitle="about text" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}></Alert>
  <div className="container my-3">
  <Routes>
    <Route  exact path="/about" element={<About/>}>
    
    </Route>
    <Route  exact path="/" element={<TextForm heading="enter the text here" mode={mode} showAlert={showAlert}/>}>
    
    </Route>
  </Routes>
  
  </div>
    </Router>
  </>
  );
}

export default App;
