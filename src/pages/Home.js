import React from "react";
import { Link } from "react-router-dom";

function App() {

  return (
 
    <div className="home">
      <h1 >Welcome, it's great having you here😊</h1>
      <Link className="link" to={`/users`}><h1>LOGIN</h1></Link>
    </div>

  );
};

export default App;
