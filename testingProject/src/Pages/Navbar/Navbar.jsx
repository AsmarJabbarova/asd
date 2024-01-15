import React from "react";
import "./../Navbar/Navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="mainNav">
        <div className="title">
          <Link to={"/"}>
            <h1>Pinker</h1>
          </Link>
        </div>
        <div className="list">
          <div className="addProduct">
            <Link to={"addProduct"}>
              <h1>AddProduct</h1>
            </Link>
          </div>
          <div className="basket">
            <Link to={"basket"}>
              <h1>Basket</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
