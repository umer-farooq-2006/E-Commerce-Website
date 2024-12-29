import FooterTwo from "../Components/FooterTwo/page";
import TopHeader2 from "../Components/TopHeader2/page";
import "./style.css";
import Link from "next/link";

import React from "react";

const Product = () => {
  return (
    <div>
      <TopHeader2 />
      <nav>
        <div className="menu">
          <h1>Avion</h1>
          <ul className="nav-list">
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
          </ul>
          <ul className="list-2">
            <li>
              <i className="bx bx-search-alt-2"></i>
            </li>
            <li>
              <Link href="./Shopping"><i className="bx bx-cart-alt"></i></Link>
            </li>
            <li>
              <Link href="./About"><i className="bx bx-info-circle"></i></Link>
            </li>
            <li>
              <Link href="./Products"><i className="bx bx-shopping-bag"></i></Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-1">
        <div className="sub-container-1">
          <div className="left-side">
            <img src="/Images/chair3.jpg" />
          </div>
          <div className="right-side">
            <div className="one">
              <h1>The Dandy Chair</h1>
              <h2>£250</h2>
            </div>
            <div className="two">
              <h3 className="h3">Description</h3>
              <p className="p">
                A timeless design, with premium materials features as one of our
                most <br /> popular and iconic pieces. The dandy chair is
                perfect for any stylish <br /> living space with beech legs and
                lambskin leather upholstery.
              </p>
              <ul className="ul">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
            </div>
            <div className="three">
              <h1>Dimensions</h1>
              <div className="lists">
                <ul>
                  <li>Height</li>
                  <li>Width</li>
                  <li>Depth</li>
                </ul>
                <ul>
                  <li>110cm</li>
                  <li>75cm</li>
                  <li>50cm</li>
                </ul>
              </div>
            </div>
            <div className="four">
              <div className="h1">
                <h1>Amount</h1>
              </div>
              <div className="box">
                <i className="bx bx-minus"></i>
                <p>1</p>
                <i className="bx bx-plus"></i>
              </div>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="heading">
          <h1>You might also like</h1>
        </div>
        <div className="images">
          <div className="img-box">
            <img src="/Images/chair.jpg" className="image" />
            <p>
              The Dandy Chair <br /> $250
            </p>
          </div>
          <div className="img-box">
            <img src="/Images/cups.jpg" className="image" />
            <p>
              Rustic Vase Set <br /> $155
            </p>
          </div>
          <div className="img-box">
            <img src="/Images/Jar.jpg" className="image" />
            <p>
              The Silky Vase <br /> $125
            </p>
          </div>
          <div className="img-box">
            <img src="/Images/Lap.jpg" className="image" />
            <p>
              The Lucy Lamp <br /> $399
            </p>
          </div>
        </div>
        <div className="button">
          <button>View Collection</button>
        </div>
      </div>
      <div className="container-2">
        <div className="heading">
          <h1>What makes our brand different</h1>
        </div>
        <div className="boxes">
          <div className="box-1">
            <i className="bx bxs-truck"></i>
            <h1 className="box">Next day as standard</h1>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className="box-2">
            <i className="bx bx-check-square"></i>
            <h1 className="box">Made by true artisans</h1>
            <p>Handmade crafted good made with real passion and craftmanship</p>
          </div>
          <div className="box-3">
            <i className="bx bx-folder"></i>
            <h1 className="box">Unbeatable prices</h1>
            <p>
              For our materials and quality you won't find better prices
              anywhere
            </p>
          </div>
          <div className="box-4">
            <i className="bx bxs-package"></i>
            <h1 className="box">Recycled packaging</h1>
            <p>
              We use 100% recycled pakaging to ensure our footprints is
              managable
            </p>
          </div>
        </div>
      </div>
      <div className="container-5">
        <div className="sub-container-5">
          <div className="heading">
            <h1>Join the club and get benefits</h1>
          </div>
          <div className="paragraph">
            <p>
              SignUp for our newsletter and receive exclusive offers on new
              <br /> ranges, sales, pop up stores and more
            </p>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="your@example.com"
              className="type"
            />
            <label>Sing up</label>
          </div>
        </div>
      </div>
      <FooterTwo />
    </div>
  );
};

export default Product;
