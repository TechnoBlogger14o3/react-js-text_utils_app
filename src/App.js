import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? '#042743' : 'white';
    showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled`, "success");
  };

  return (
    // <Router>
      <>
        <Navbar title="TextUtils" mode={mode} aboutText="About Us" toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />
        {/* <Routes>
          <Route
            path="/"
            element={
              <div className="container my-3">
                <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
              </div>
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes> */}
        <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
          
        </div>
      <div className="container my-3">
      <About mode={mode} />
      </div>
      </>
    // </Router>
  );
}

export default App;
