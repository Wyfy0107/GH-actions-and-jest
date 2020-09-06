import React, { useState } from "react";
import "./App.css";
import Account from "./Account";

function App() {
  const [user, setUser] = useState("duy");

  return (
    <div className='App'>
      <h1>Display Active Users Account Details</h1>
      <Account user={user} />
    </div>
  );
}

export default App;
