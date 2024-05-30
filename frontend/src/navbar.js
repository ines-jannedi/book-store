import React from "react"
import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <nav className="nav">
        <Link to="/" className="site-name" id="active" >Book shop</Link>
      <ul>
        <li >
      <Link to="/update">update</Link>
        </li>
        <li>
        <Link to="/add">add</Link>
        </li>
        <li>
        <Link to="/search">search</Link>
        </li>
      </ul>
        </nav>
    )

}


export default Navbar;