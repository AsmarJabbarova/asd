import React from 'react'
import './../Navbar/Navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className="container">
    <div className="mainNav">
      <div className="name">Tasty</div>
      <div className="list">
      <Link style={{textDecoration:"none"}} to={"/"}> <div className="home">Home</div> </Link>
        <div className="blog">Blog</div>
        <div className="menu">Menu</div>
        <Link style={{textDecoration:"none"}} to={"add"}><div className="add">Add</div></Link>
        <div className="res">Reservation</div>
        <div className="about">About</div>
        <div className="contact">Contact</div>

      </div>
    </div>
    </div>
   
    </>
  )
}

export default Navbar