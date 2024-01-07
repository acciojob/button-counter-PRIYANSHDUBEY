
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [res, setRes] = useState(0);
  
  return (
    <div>
        <p>Button clicked {res} times</p>
        <button onClick={() => setRes(res+1)}>Click me</button>
    </div>
  )
}

export default App
