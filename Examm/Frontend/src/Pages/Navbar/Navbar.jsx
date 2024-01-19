import React from 'react'
import './../Navbar/Navbar.scss'
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="mainNav">
      <div className="title">
  <h1>Pulse.</h1>
      </div>
      <div className="list">
     <Link to={"/"}><div className="home">Home</div></Link>
        <Link to={'add'}><div className="add">Add</div></Link>
        <div className="wish">Wish</div>
      </div>
      <div className="reser">
        <div className="res">Reservations</div>
        <div className="phone">
          <div className="ico"><FaPhoneAlt /></div>
          <div className="tes"> 652-345 3222 11</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar