import "./style.css"

import React from 'react'

const FooterTwo = () => {
  return (
    <div>
        <div className="container-6">
        <div className="sub-container-6">
          <div className="part-1">
            <h1>Avion</h1>
            <p>
              21 New York Street <br /> New York City <br /> United States of
              America <br /> 432 34
            </p>
          </div>
          <div className="part-2">
            <h1>Social Links</h1>
            <div className="icons">
              <i className="bx bxl-linkedin-square"></i>
              <i className="bx bxl-facebook-square"></i>
              <i className="bx bxl-instagram"></i>
              <i className="bx bxl-whatsapp"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-pinterest"></i>
            </div>
          </div>
          <div className="part-3">
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
          </div>
        </div>
        <hr/>
        <div className="line">
          <p>Copyright 2022 Avion LTD</p>
        </div>
      </div>
    </div>
  )
}

export default FooterTwo