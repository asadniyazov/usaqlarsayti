import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:'flex',gap:"30px",justifyContent:"center"}}>
      <ul style={{display:'flex',gap:"30px",justifyContent:"center"}}>
      <Link  to={"/"}>Home</Link>
      <Link  to={"/register"}>Register</Link>
      <Link  to={"/login"}>Login</Link>
      <Link  to={"/admin"}> Admin</Link>
      </ul>
    </div>
  )
}

export default Navbar
