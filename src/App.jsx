import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './App.css';

function App() {
  return (
    <>
      <input type="radio" name="slider" id="slider-one" />
      <input type="radio" name="slider" id="slider-two" />
      <div className="container">
        <SignUp /> 
        <Login /> 
      </div>
    </>
  );
}

export default App;
