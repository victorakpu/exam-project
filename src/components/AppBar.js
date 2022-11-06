import React from "react";
import { Link } from "react-router-dom";
 
const AppBar = () => {
 return (
   <header className="header">
     <nav className="appbar-container">
     <button className="btn"> <Link className="link" to={`/`}><h1>Home</h1></Link></button> 
       <div className="nav-links">
       <button className="btn"> <Link className="link" to={`/about`}><h1>About us</h1></Link></button>
       <button className="btn"> <Link className="link" to={`/users`}><h1>Login</h1></Link></button>
       <button className="btn"><Link className="link" to={`/abouttht`}><h1>This is a 404</h1></Link></button>
       </div>
     </nav>
   </header>
 );
};
 
export default AppBar;
