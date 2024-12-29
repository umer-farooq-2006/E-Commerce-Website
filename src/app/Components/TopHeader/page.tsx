import "./style.css";
import React from "react";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div>
      <nav className="top-header">
        <div className="menu">
          <div className="left-icons">
            <i className="bx bx-search-alt-2"></i>
          </div>
          <h1 className="mid-text">Avion</h1>
          <div className="right-icons">
            <div className="shopping">
                <Link href="./Shopping"><i className="bx bx-cart-alt cart"></i></Link>
            </div>
            <div className="about">
                <Link href="./About"><i className="bx bx-info-circle"></i></Link>
            </div>
            <div className="products">
                <Link href="./Products"><i className='bx bx-shopping-bag'></i></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopHeader;
