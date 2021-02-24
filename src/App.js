import React, {Component} from 'react';
import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div className="App"> 
    <h1>LeadersBoard</h1> 
    <Student name="Waqas" university="ims" score={348} />
    <Student name="Ali" university="cecos" score={334} />
    <Student name="Hamad" university="city" score={354}  />
  

    </div>  
  );
}

export default App;
