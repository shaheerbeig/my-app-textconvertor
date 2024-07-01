import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setCurrMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'dark') {
      setCurrMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      setCurrMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }

  return (
    <>
        <Navbar title="TextConvertor" about="About Us" currMode={mode} toggleMode={toggleMode} />
          <div className='container'>
            <TextForm heading="Enter the text to convert" currMode={mode}  />
          </div>
    </>
  );
}

export default App;
