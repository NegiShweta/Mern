import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>

    <Link to = "/">Home</Link>
    <br />
    <Link to = "/Login">Login</Link>
    <br />
    <Link to = "/Register">Register</Link>

    </>
    
  )
}
