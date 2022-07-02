import React, { useState } from "react";
import "./App.css";

const App = () => {
  
  let timeNow=new Date().toLocaleTimeString();
  
  const [cTime,setTIme]=useState(timeNow);
  const currentTime=()=>{
  let timeNow=new Date().toLocaleTimeString();
   setTIme(timeNow); 
  }

  let time = new Date();
  let greeting = time.getHours();
  let message = "";

  if (greeting >= 1 && greeting < 12) {
    message = "Good Morning";
  } else if (greeting >= 12 && greeting < 19) {
    message = "Good Afternoon";
  } else if (greeting >= 19 && greeting < 20) {
    message = "Good Evening";
  } else message = "Good Night";


  setInterval(currentTime,1000);
  return (
    
    <div className="App">
      <header className="App-header">
        <h2>{cTime}</h2>
        <h1>Hello {message}</h1>

      </header>
    </div>
  );
};

export default App;
