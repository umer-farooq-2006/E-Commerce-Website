import "./style.css"

import React from 'react'

const FooterOne = () => {
  return (
    <div>
        <div className="container-7">
        <div className="sub-container-7">
          <div>
            <ul>
              <li>Menu</li>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Recently viewed</li>
              <li>Popular this weak</li>
              <li>All products</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Categories</li>
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Our Company</li>
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Return policies</li>
            </ul>
          </div>
          <div className="input">
            <h1>Join our mailing list</h1>
            <input
              type="text"
              placeholder="your@example.com"
              className="type"
            />
            <label>Sing up</label>
          </div>
        </div>
        <hr />
        <div className="line">
          <p>Copyright 2022 Avion LTD</p>
          <div className="icons">
            <i className="bx bxl-linkedin-square"></i>
            <i className="bx bxl-facebook-square"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-whatsapp"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-pinterest"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterOne